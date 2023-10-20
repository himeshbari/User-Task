// actions/attendanceActions.js
import axios from 'axios';

// Action Types
export const GET_ATTENDENCE_REQUEST = 'GET_ATTENDENCE_REQUEST';
export const GET_ATTENDENCE_SUCCESS = 'GET_ATTENDENCE_SUCCESS';
export const GET_ATTENDENCE_FAILURE = 'GET_ATTENDENCE_FAILURE';

// Action Creators

// Get Attendance
export const getAttendenceRequest = () => ({
  type: GET_ATTENDENCE_REQUEST,
});

export const getAttendenceSuccess = (attendance) => ({
  type: GET_ATTENDENCE_SUCCESS,
  payload: attendance,
});

export const getAttendenceFailure = (error) => ({
  type: GET_ATTENDENCE_FAILURE,
  payload: error,
});

// // Async Action: Get Attendance
// export const getAttendence = (fromDate, toDate, locationId) => (dispatch) => {
//   dispatch(getAttendenceRequest());

//   axios
//     .get(`http://localhost:8080/attendence/get-attendence/${fromDate}/${toDate}/${locationId}`)
//     .then((response) => {
//       dispatch(getAttendenceSuccess(response.data));
//     })
//     .catch((error) => {
//       dispatch(getAttendenceFailure(error.message));
//     });


      export const getAttendence = ({ fromDate, toDate, locationId }) => {
        return (dispatch) => {
          dispatch({ type: GET_ATTENDENCE_REQUEST });
      
          axios
            .get(`http://localhost:8080/attendence/get-attendence/${fromDate}/${toDate}/${locationId}`)
            .then((response) => {
              console.log("API response data: ", response.data);
              dispatch({ type: GET_ATTENDENCE_SUCCESS, payload: response.data });
            })
            .catch((error) => {
              console.error("API error: ", error);
              dispatch({ type: GET_ATTENDENCE_FAILURE, payload: error.message });
            });
        };
      };
      