import { combineReducers } from 'redux';
import * as actionTypes from '../constants/ActionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_DETAILS_SUCCESS:
      return action.items;
    case actionTypes.ACTION_GET_DETAILS_STARTED:
    case actionTypes.ACTION_GET_DETAILS_FAILED:
      return [];
    default:
      return state;
  }
};

const detailsReducer = combineReducers({
    items,  
});

export default detailsReducer;
