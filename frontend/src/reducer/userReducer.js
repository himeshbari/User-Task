// reducers/userReducer.js
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../action/userAction.js';

const initialState = {
  isAuthenticated: false,
  user: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default userReducer;
