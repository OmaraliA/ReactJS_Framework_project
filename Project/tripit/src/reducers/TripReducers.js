import { combineReducers } from 'redux';
import * as actionTypes from '../constants/ActionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_TRIPS_SUCCESS:
      return action.items;
    case actionTypes.ACTION_GET_TRIPS_STARTED:
    case actionTypes.ACTION_GET_TRIPS_FAILED:
      return [];
    default:
      return state;
  }
};

const tripsReducer = combineReducers({
    items,  
});

export default tripsReducer;
