import React from 'react';

export const ShimmerComponent = (props) => {
    const { numberItems=0 } = props;
    let items = [];

    const renderShimmerLines = (number) => {
        for (let i = 1; i <= number; i++) {
            items.push(<div key={i} className='lines shine'></div>);
        }
        return items;
    }

    return (
        <div className='shimmer'>
            {
                renderShimmerLines(numberItems)
            }
        </div>
    );

}