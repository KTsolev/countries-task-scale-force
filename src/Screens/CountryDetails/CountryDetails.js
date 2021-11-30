import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { CountryTile } from '../../shared_ui_components/CountryTile/CountryTile';
import { selectedCountry } from '../../redux/selectors';
import {ReactComponent as BackArrow} from '../../assets/back_arrow_left.svg';
import { cancelUserAction } from '../../redux/countriesSlice';

export const CountryDetails  = (props) => {
    const country = useSelector(selectedCountry);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
           dispatch(cancelUserAction(null));
        }
    }, [])

    const goBack = () => {
        history.push('/');
    }   
    
    if (!country) {
        goBack();
        return null;
    }

    return (
        <section className='details'>
            <h2>Country Details</h2>
            <div className='details-item' onClick={goBack}>
                <BackArrow className='svg' />
            </div>
            <div className='details-item details-item--row'>
                <div className='details-item'>
                    <span className='details-item-header'>Iso Code</span>
                    <span className='details-item-header'>Name</span>    
                    <span className='details-item-header'>CapitalCity</span>    
                    <span className='details-item-header'>Longitude</span>  
                    <span className='details-item-header'>Latitude</span>
                </div>
                <CountryTile country={country} dissableActions cssClassName='column'/>
            </div>
            <div className='details-item details-item--row'>
                <div className='details-item'>
                    <span className='details-item-header'>Region</span>
                </div>
                <div className='details-item'>
                    <span className='details-item-label'>{country.region.value || 'N/A'}</span>
                    <span className='details-item-label'>{country.region.id || 'N/A'}</span>
                    <span className='details-item-label'>{country.region.iso2code || 'N/A'}</span>
                </div>
            </div>
            <div className='details-item details-item--row'>
                <div className='details-item'>
                    <span className='details-item-header'>Adminregion</span>
                </div>
                <div className='details-item'>
                    <span className='details-item-label'>{country.adminregion.id || 'N/A'}</span>
                    <span className='details-item-label'>{country.adminregion.iso2code || 'N/A'}</span>
                    <span className='details-item-label'>{country.adminregion.value || 'N/A'}</span>
                </div>
            </div>
            <div className='details-item details-item--row'>
                <div className='details-item'>
                    <span className='details-item-header'>IncomeLevel</span>
                </div>
                <div className='details-item'>
                    <span className='details-item-label'>{country.incomeLevel.id || 'N/A'}</span>
                    <span className='details-item-label'>{country.incomeLevel.iso2code || 'N/A'}</span>
                    <span className='details-item-label'>{country.incomeLevel.value || 'N/A'}</span>
                </div>
            </div>
            <div className='details-item details-item--row'>
                <div className='details-item'>
                    <span className='details-item-header'>LendingType</span>
                </div>
                <div className='details-item'>
                    <span className='details-item-label'>{country.lendingType.id || 'N/A'}</span>
                    <span className='details-item-label'>{country.lendingType.iso2Code || 'N/A'}</span>
                    <span className='details-item-label'>{country.lendingType.value || 'N/A'}</span>
                </div>
            </div>
        </section>
    );
}