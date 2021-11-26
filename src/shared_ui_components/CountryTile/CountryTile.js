
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { beginUserAction, cancelUserAction } from '../../Screens/Countries/countriesSlice';

export const CountryTile = (props) => {
    const { country, cssClassName, dissableActions } = props;
    const dispatch = useDispatch();
    const div = useRef(null);

    const getCountryDetails = () => {
        dispatch(beginUserAction(country));
    };

    const animateElement = () => {
        if (div.current && !dissableActions) {
            getCountryDetails();
            div.current.className = div.current.className + ' animate';
        }
    }

    const removeAnimation = () => {
        if (div.current && !dissableActions) {
            dispatch(cancelUserAction(null));
            div.current.className = div.current.className.replace('animate', '');
        }
    }

    return (
        <div 
            className={`${cssClassName} country-tile`}
            onMouseDownCapture={animateElement}
            onMouseUpCapture={removeAnimation}>
            <div ref={div}  className='country-tile-inner'></div>
            <span className='country-tile-item'>{country.iso2Code || 'N/A'}</span>
            <span className='country-tile-item'>{country.name || 'N/A'}</span>    
            <span className='country-tile-item'>{country.capitalCity || 'N/A'}</span>    
            <span className='country-tile-item'>{country.longitude || 'N/A'}</span>    
            <span className='country-tile-item'>{country.latitude || 'N/A'}</span>
        </div>
    );
}