import React from 'react';

import { connect } from 'react-redux';
import { changePage } from '../redux/actions';
import WeekView from './WeekView';

function DayView({dayData, updatePage}) {
    const degrees = <span>&#176;</span>;

    const goBack = () => {
        updatePage(<WeekView/>);
    }

    return (
        <div className='dayDiv'>
            <h3 className='dayHeader'>
                {dayData.day}
                <button className='headerBack' onClick={() => goBack()}>Back</button>
            </h3>
            <div className='dayBodyDiv'>
                <span className='highSpan'>{dayData.high}{degrees}</span>
                <span className='lowSpan'>{dayData.low}{degrees}</span>
                <p>Additional information</p>
            </div>
        </div>
    )
    
}

const mapStateToProps = (state) =>{
    return {
        page: state.page
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        updatePage: (newPage) => dispatch(changePage(newPage))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DayView);