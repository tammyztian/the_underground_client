import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const store = createStore(
  combineReducers({
      form: formReducer,
     
  }),
  applyMiddleware(thunk)
);


export default store;