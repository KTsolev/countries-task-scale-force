
import React from 'react';

export const TableHeader = (props) => {
    const { onPress, clasName } = props;
    return (
        <div className={clasName}>
            <span 
                className='list-header-item'
                data-prop='Iso Code'
                onClick={onPress}
            >
                Iso Code
            </span>
            <span 
                className='list-header-item'
                data-prop='Name'
                onClick={onPress}
            >
                Name
            </span>    
            <span 
                className='list-header-item'
                data-prop='Capital City'
                onClick={onPress}
            >
             Capital City
            </span>    
            <span 
                className='list-header-item'
                data-prop='Longitude'
                onClick={onPress}
            >
                Longitude
            </span>    
            <span 
                className='list-header-item'
                data-prop='Latitude'
                onClick={onPress}
            >
                Latitude
            </span>
        </div>
    );
}