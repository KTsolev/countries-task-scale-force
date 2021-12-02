import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchCountries, fetchCountryByName } from '../../redux/countriesSlice';
import { selectCountries, selectedCountry, isLoading, error as queryError } from '../../redux/selectors';
import { CountryTile } from '../../shared_ui_components/CountryTile/CountryTile';
import { Filters } from '../../shared_ui_components/Filters/Filters';
import { TableHeader } from '../../shared_ui_components/TableHeader/TableHeader';
import {ErrorHandler} from '../../shared_ui_components/ErrorHandler/ErrorHandler';
import { ShimmerComponent } from '../../shared_ui_components/ShimmerComponent/ShimmerComponent';
import { PaginationButtons } from '../../shared_ui_components/PaginationButtons/PaginationButtons';
import _ from 'lodash';

export const CountriesList = (props) => {
  const fetchedCountries = useSelector(selectCountries);
  const selectedCountryDetails = useSelector(selectedCountry);
  const loading = useSelector(isLoading);
  const error = useSelector(queryError);
  const dispatch = useDispatch();
  const history = useHistory();
  const [filtered, setFiltered] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [searchByName, setSearchByName] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const { items = [], page, pages, per_page } = fetchedCountries;

  const loadCountries = useCallback((page=1, itemsPerPage=50, reload=false) => dispatch(fetchCountries({page, itemsPerPage, reload})),[dispatch]);

  useEffect(() => {
      loadCountries(page, per_page);
  }, [loadCountries, page, per_page]);

  useEffect(() => {
    if (selectedCountryDetails) {
        history.push('/details');
    }
  }, [history, selectedCountryDetails])

  useEffect(() => {
    if (pages > 0) {
      setItemsPerPage(per_page);
    }

  }, [pages, per_page]);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const debouncedAction = useMemo(
    () => _.debounce(query => {
      if (!query.name) {
        loadCountries(page, per_page);;
      } else {
        dispatch(fetchCountryByName(query));
      }
    }, 800),
    
    [loadCountries, page, per_page, dispatch]
  );

  const filterByName = (value) => {
    let newItems = []; 
    if (value) {
      newItems = items.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()));
    } else {
      newItems = items;
    }

    setFiltered(newItems);
  }

  const onChange = (event) => {
      const value = event.currentTarget.value;
      const input = event.currentTarget.name;

      if (input === 'searchByName') {
          setSearchByName(value);
          debouncedAction({name: value});
      } else {
        setFilterBy(value);
        filterByName(value);
      }
  }

  const onSelect = (event) => {
    const value = event.target.value;
  
    setItemsPerPage(value);
    dispatch(fetchCountries({page: 1, itemsPerPage: value}));
  }

  const sortFetchedItemsBy = (prop, direction) => {
    let sorted = [...items].sort((a, b) => a[prop].localeCompare(b[prop]) * direction );
    setFiltered(sorted);
  }

  const sortBy = (event) => {
    const name = event.currentTarget.dataset.prop;
    const direction = 1;
    switch(name) {
       case 'Iso Code':
        sortFetchedItemsBy('iso2Code', direction);
       break;
       case 'Name':
        sortFetchedItemsBy('name', direction);
       break;
       case 'Capital City':
        sortFetchedItemsBy('capitalCity', direction);
       break;
       case 'Longitude':
        sortFetchedItemsBy('longitude', direction);
       break;
       case 'Latitude':
        sortFetchedItemsBy('latitude', direction);
       break;
       default:
       break;   
    }
  }

  if (loading) {
    return (
      <section className="list">
        <h2>Countries List</h2>
        <ShimmerComponent numberItems={25} />
      </section>);
  }

  if (error) {
    if (error && error.message) {
      return (
        <section className="list">
          <h2>Countries List</h2>
          <Filters 
              filterBy={filterBy}
              searchByName={searchByName}
              onChange={onChange}
              itemsPerPage={itemsPerPage}
              onSelect={onSelect}
          />
          <TableHeader clasName='list-header' onPress={sortBy} />
          <ErrorHandler 
            title={error.message[0].value}
            onPress={loadCountries}
          />
        </section>);
    }
    return (
      <section className="list">
        <h2>Countries List</h2>
        <Filters 
            filterBy={filterBy}
            searchByName={searchByName}
            onChange={onChange}
            itemsPerPage={itemsPerPage}
            onSelect={onSelect}
        />
        <TableHeader clasName='list-header' onPress={sortBy} />
        <ErrorHandler 
          title='Something went wrong.'
          onPress={loadCountries}
        />
      </section>); 
  }

  return (
    <section className="list">
        <h2>Countries List</h2>
        <Filters 
            filterBy={filterBy}
            searchByName={searchByName}
            onChange={onChange}
            itemsPerPage={itemsPerPage}
            onSelect={onSelect}
        />
      <TableHeader clasName='list-header' onPress={sortBy} />
      {filtered.length === 0 && <ErrorHandler title="We coudn't find any data. Try to change filtration!" />}
      {
        filtered.map((item, index) => 
          <section key={index} className='list-row'>
            <TableHeader 
              key={`${item.iso2Code}-${index}`}
              clasName='list-header list-header--vertical' 
              onPress={sortBy} />
            <CountryTile 
              key={item.id}
              country={item}
            />
          </section>
           )
      }
      <PaginationButtons itemsPerPage={itemsPerPage} />
    </section>
  )
}