
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { beginUserAction, cancelUserAction } from '../../redux/countriesSlice';

export const CountryTile = (props) => {
    const { country, cssClassName, dissableActions } = props;
    const dispatch = useDispatch();
    const div = useRef(null);
    
    const animateElement = () => {
        if (div.current && !dissableActions) {

            dispatch(beginUserAction(country));
            div.current.className = div.current.className + ' animate';
        }
    }

    const removeAnimation = () => {
        if (div.current && div.current.className && div.current.className.includes('animate')) {

            dispatch(cancelUserAction(null));
            div.current.className = div.current.className.replace('animate', '');
        }
    }

    if (!country) {
        return null;
    }

    return (
        <div 
            className={cssClassName ? `${cssClassName} country-tile`: "country-tile"}
            onMouseDownCapture={animateElement}
            onMouseUpCapture={removeAnimation}>
            <div ref={div} className='country-tile-inner'></div>
            <span className='country-tile-item'>{country.iso2Code || 'N/A'}</span>
            <span className='country-tile-item'>{country.name || 'N/A'}</span>    
            <span className='country-tile-item'>{country.capitalCity || 'N/A'}</span>    
            <span className='country-tile-item'>{country.longitude || 'N/A'}</span>    
            <span className='country-tile-item'>{country.latitude || 'N/A'}</span>
        </div>
    );
}