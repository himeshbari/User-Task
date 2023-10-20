// actions/userActions.js
import axios from 'axios'; // You need to install Axios for making API requests

// Action Types
export const ADD_LOCATION_REQUEST = 'ADD_LOCATION_REQUEST';
export const ADD_LOCATION_SUCCESS = 'ADD_LOCATION_SUCCESS';
export const ADD_LOCATION_FAILURE = 'ADD_LOCATION_FAILURE';
export const GET_LOCATION_REQUEST = 'GET_LOCATION_REQUEST';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';


// Action Creators
// ADD USER
export const addLocationRequest = () => ({
  type: ADD_LOCATION_REQUEST,
});

export const addLocationSuccess = (location) => ({
  type: ADD_LOCATION_SUCCESS,
  payload: location,
});

export const addLocationFailure = (error) => ({
  type: ADD_LOCATION_FAILURE,
  payload: error,
});

//GET Location
export const getLocationRequest = () => ({
  type: GET_LOCATION_REQUEST,
});

export const getLocationSuccess = (location) => ({
  type: GET_LOCATION_SUCCESS,
  payload: location,
});

export const getLocationFailure = (error) => ({
  type: GET_LOCATION_FAILURE,
  payload: error,
});

// Async Action: Location Add
export const addLocation = (locationData) => (dispatch) => {
  dispatch(addLocationRequest());

  axios
    .post('/location/add-location', locationData) // Replace with your actual API endpoint
    .then((response) => {
      dispatch(addLocationSuccess(response.data));
    })
    .catch((error) => {
      dispatch(addLocationFailure(error.message));
    });
};

// Get User
// Async Action: Location Add
export const getLocation = (locationData) => (dispatch) => {
  dispatch(getLocationRequest());

  axios
    .get('/location/get-locations', locationData) // Replace with your actual API endpoint
    .then((response) => {
      dispatch(getLocationSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getLocationFailure(error.message));
    });
};
