import { CHANGE_PAGE } from '../actions';
import { combineReducers } from 'redux';

import React from 'react';
import WeekView from '../../components/WeekView';

const initialState = {
    activePage: <WeekView/>
};

function pageReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_PAGE:
            const newState = {...state};
            newState.activePage = action.newPage;
            return newState;
        default:
            return state;
    }
}

const reducers = combineReducers({
    page: pageReducer
});

export default reducers;