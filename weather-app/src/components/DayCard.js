import React from 'react';

export default function DayCard({dayData}) {
    const degrees = <span>&#176;</span>;

    return (
        <div className='dayCardDiv'>
            <h3 className='dayCardHeader'>{dayData.day}</h3>
            <span className='highSpan'>{dayData.high}{degrees}</span>
            <span className='lowSpan'>{dayData.low}{degrees}</span>
        </div>
    )
    
}