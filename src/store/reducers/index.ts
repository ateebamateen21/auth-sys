import { combineReducers } from 'redux';
import authReducer from './authReducer.ts'; 

const rootReducer = combineReducers(
  {
    authReducer: authReducer

  //other reducers here
  }
)

export default rootReducer



