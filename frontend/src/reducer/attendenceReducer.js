// reducers/attendanceReducer.js
import {
    
    GET_ATTENDENCE_REQUEST,
    GET_ATTENDENCE_SUCCESS,
    GET_ATTENDENCE_FAILURE,
  } from '../action/attendenceAction.js'; // Make sure to import the correct action types
  
  const initialState = {
    attendence: [],
    loading: false,
    error: null,
  };
  
  const attendenceReducer = (state = initialState, action) => {
    switch (action.type) {
     
      case GET_ATTENDENCE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_ATTENDENCE_SUCCESS:
        return {
          ...state,
          attendance: action.payload,
          loading: false,
        };
      case GET_ATTENDENCE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default attendenceReducer;
  