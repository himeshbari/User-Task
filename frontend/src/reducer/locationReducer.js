// reducers/locationReducer.js
import {
    ADD_LOCATION_REQUEST,
    ADD_LOCATION_SUCCESS,
    ADD_LOCATION_FAILURE,
    GET_LOCATION_REQUEST,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
  } from '../action/locationAction.js'; // Make sure to import the correct action types
  
  const initialState = {
    location: [],
    loading: false,
    error: null,
  };  
  
  const locationReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_LOCATION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_LOCATION_SUCCESS:
        return {
          ...state,
          location: action.payload,
          loading: false,
        };
      case ADD_LOCATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_LOCATION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_LOCATION_SUCCESS:
        return {
          ...state,
          location: action.payload,
          loading: false,
        };
      case GET_LOCATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default locationReducer;
  