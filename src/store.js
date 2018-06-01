import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {liftReducer} from './reducers/lifts';

const store = createStore(
  combineReducers({
      form: formReducer,
      lifts: liftReducer,
     
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  applyMiddleware(thunk)
);


export default store;