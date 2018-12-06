
import * as actionTypes from '../constants/ActionTypes';
import * as TripListApi from '../api/TripListApi';
import * as ReviewApi from '../api/ReviewApi';
import * as getTripsDetail from '../api/TripDetailApi';

export const getTrips = () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_TRIPS_STARTED
  })

  TripListApi.getTrips().then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_GET_TRIPS_SUCCESS,
                items: responseObject,
              });
            }
          );
      }
    )

}

export const getDetails = (data) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_DETAILS_STARTED
  })

  getTripsDetail.getTripsDetail(data).then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_GET_DETAILS_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_GET_DETAILS_SUCCESS,
            items: responseObject
          });
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_GET_DETAILS_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};

