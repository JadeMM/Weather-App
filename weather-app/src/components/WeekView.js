import React from 'react';
import { weatherData } from '../data';

import { connect } from 'react-redux';
import { changePage } from '../redux/actions';

import DayCard from './DayCard';
import DayView from './DayView';

class WeekView extends React.Component {
    constructor() {
        super();
        this.state = {
            data: weatherData
        };
    }

    openDayView = (item) => {
        this.props.openDay(<DayView dayData={item}/>)
    }

    render() {
        return (
            <div>
                <h2>Seattle Weather</h2>
                <table>
                    <tbody>
                        <tr>
                            {this.state.data.map(item => {
                                return (
                                    <td key={item.date}  onClick={()=> this.openDayView(item)}>
                                        <DayCard dayData={item}/>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        page: state.page
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        openDay: (newPage) => dispatch(changePage(newPage))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(WeekView);