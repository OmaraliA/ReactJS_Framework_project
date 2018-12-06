import { combineReducers } from 'redux';
import * as actionTypes from '../constants/ActionTypes';

const reviews = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_REVIEWS_SUCCESS:
      return action.reviews;
    case actionTypes.ACTION_GET_REVIEWS_STARTED:
    case actionTypes.ACTION_GET_REVIEWS_FAILED:
      return [];
    default:
      return state;
  }
};


const reviewReducer = combineReducers({
    reviews   
});

export default reviewReducer;
