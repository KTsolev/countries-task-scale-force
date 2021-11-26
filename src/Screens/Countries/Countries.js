import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchCountries } from './countriesSlice';
import { CountryTile } from '../../shared_ui_components/CountryTile/CountryTile';
import { Filters } from '../../shared_ui_components/Filters/Filters';
import { TableHeader } from '../../shared_ui_components/TableHeader/TableHeader';
import { ShimmerComponent } from '../../shared_ui_components/ShimmerComponent/ShimmerComponent';
import { selectCountries, selectedCountry, isLoading, error as queryError } from './selectors';
import {ErrorHandler} from '../../shared_ui_components/ErrorHandler/ErrorHandler';

export const CountriesList = (props) => {
  const fetchedCountries = useSelector(selectCountries);
  const selectedCountryDetails = useSelector(selectedCountry);
  const loading = useSelector(isLoading);
  const error = useSelector(queryError);
  const dispatch = useDispatch();
  const history = useHistory();
  const [buttons, setButtons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(0);

  const { items = [], pages, per_page, page } = fetchedCountries;

  useEffect(() => {
      loadCountries(1,50);
  }, []);

  useEffect(() => {
    if (selectedCountryDetails) {
        history.push('/details');
    }
  }, [selectedCountryDetails])

  useEffect(() => {
    if (pages > 0) {
      calculatePaginationButtons();
      setItemsPerPage(per_page);
    }

  }, [pages, per_page]);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const calculatePaginationButtons = () => {
      let p = 1;
      let items = [];
  
      while(p <= pages) {
        items.push(p);
        p++;
      }
  
      setButtons(items);
  }

  const filterByName = (value) => {
    let newItems = []; 
    if (value) {
      newItems = items.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()));
    } else {
      newItems = items;
    }

    setFiltered(newItems);
  }

  const loadCountries = (page=1, itemsPerPage=50) => dispatch(fetchCountries({page, itemsPerPage}));


  const onChange = (event) => {
      const value = event.currentTarget.value;

      setFilterBy(value);
      filterByName(value)
  }

  const onSelect = (event) => {
    const value = event.target.value;
  
    setItemsPerPage(value);
    dispatch(fetchCountries({page: 1, itemsPerPage: value}));
  }

  const onPaginationButtonClick = (event) => {
    const value = event.currentTarget.innerHTML;
    dispatch(fetchCountries({page: value, itemsPerPage, reload: true }));
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
    return (
      <section className="list">
        <h2>Countries List</h2>
        <ErrorHandler 
          title="Something went wrong and coudn't fetch data"
          onPress={loadCountries}
        />
      </section>); 
  } 

  return (
    <section className="list">
        <h2>Countries List</h2>
        <Filters 
            filterBy={filterBy}
            onChange={onChange}
            itemsPerPage={itemsPerPage}
            onSelect={onSelect}
        />
        <TableHeader clasName='list-header' onPress={sortBy} />
      {
        filtered.map((item, index) => 
          <section className='list-row'>
            <TableHeader 
              key={index}
              clasName='list-header list-header--vertical' 
              onPress={sortBy} />
            <CountryTile 
              key={item.id}
              country={item}
            />
          </section>
           )
      } 

      <div className='list-controls'>
        {buttons.map(button => <span 
              key={button}
              onClick={onPaginationButtonClick}
              className={button === page ? 'list-controls-item list-controls-item--current' : 'list-controls-item'}
            >
              {button}
            </span>)}
      </div>
    </section>
  )
}