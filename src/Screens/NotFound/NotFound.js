import React from 'react';
import { useHistory } from "react-router-dom";
import {ReactComponent as BackArrow} from '../../assets/back_arrow_left.svg';
import NotFound from '../../assets/not-found-img.jpg';

export const NotFoundPage = (props) => {
    const history = useHistory();

    const goBack = () => history.replace('/');

    return (
        <section className='not-found'>
            <div className='not-found-item' onClick={goBack}>
                <BackArrow className='svg' />
            </div>
            <div className='not-found-img'>
                <img src={NotFound} alt='not found page' />
            </div>
        </section>  
    )
}