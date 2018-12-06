import { combineReducers } from 'redux';
import TripReducer from './TripReducers'
import ReviewReducer from './ReviewReducer'

const rootReducer = combineReducers({
  trips: TripReducer,
  reviews: ReviewReducer
})

export default rootReducer;
