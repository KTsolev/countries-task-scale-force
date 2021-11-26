import React from 'react';

export const ErrorHandler = (props) => {
    const { title, onPress } = props;

    return (
        <section className='error-page'>
            <h2>{title}</h2>
            {onPress && <span className='error-button' onClick={onPress} >Try again.</span>}
        </section>
    )
}