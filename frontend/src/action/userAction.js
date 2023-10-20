// actions/userActions.js
import axios from 'axios'; // You need to install Axios for making API requests

// Action Types
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
// ADD USER
export const addUserRequest = () => ({
  type: ADD_USER_REQUEST,
});

export const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const addUserFailure = (error) => ({
  type: ADD_USER_FAILURE,
  payload: error,
});

//GET USER
export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

//Login


export const loginSucces = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});


// Async Action: User Add
export const addUser = (userData) => (dispatch) => {
  dispatch(addUserRequest());

  axios
    .post('/user/add-user', userData) // Replace with your actual API endpoint
    .then((response) => {
      dispatch(addUserSuccess(response.data));
    })
    .catch((error) => {
      dispatch(addUserFailure(error.message));
    });
};

// Get User
// Async Action: User Add
export const getUser = (userData) => (dispatch) => {
  dispatch(getUserRequest());

  axios
    .get('/user/get-user', userData) // Replace with your actual API endpoint
    .then((response) => {
      dispatch(getUserSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getUserFailure(error.message));
    });
};


//Login 

export const login = (username, password) => {
  return (dispatch) => {
    axios
      .post('/user/login-user', { username, password })
      .then((response) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      });
  };
};

