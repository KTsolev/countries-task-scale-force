import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountries } from '../../redux/selectors';
import { fetchCountries } from '../../redux/countriesSlice';

export const PaginationButtons = (props) => {
  const { itemsPerPage } = props;
  const dispatch = useDispatch();
  const fetchedCountries = useSelector(selectCountries);
  const { pages, page } = fetchedCountries;
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    calculatePaginationButtons();    
  }, [pages, itemsPerPage]);

  const calculatePaginationButtons = () => {
    let items = [];
    
    for(let p=1; p <= pages; p++) {
      items.push(p);
    }

    setButtons([...items]);
  }

  const onPaginationButtonClick = (event) => {
    const value = event.currentTarget.innerHTML;
    dispatch(fetchCountries({page: value, itemsPerPage, reload: true }));
  }

  return (
    <div className='pagination-controls'>
        {buttons.map(button => <span 
              key={button}
              onClick={onPaginationButtonClick}
              className={button === page ? 'pagination-controls-item pagination-controls-item--current' : 'pagination-controls-item'}
            >
              {button}
            </span>)}
    </div>
  )
}