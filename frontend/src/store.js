// store/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducer/userReducer'; // Import your user reducer
import locationReducer from './reducer/locationReducer';
import attendenceReducer from './reducer/attendenceReducer';

const rootReducer = combineReducers({
  user: userReducer, // Add more reducers if needed
  location: locationReducer,
  attendence : attendenceReducer,

});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
