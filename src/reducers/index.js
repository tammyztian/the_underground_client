import {combineReducers} from 'redux';
import {userReducer} from './reducers';

const rootReducer = combineReducers(
  {userReducer}
);

export default rootReducer;