import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {loadAuthToken} from './local-storage';

import {reducer as formReducer} from 'redux-form';

import {liftReducer} from './reducers/lifts';
import {authReducer} from './reducers/auth';
import {programReducer} from './reducers/program';
import {viewFormReducer} from './reducers/viewform';

import {setAuthToken, refreshAuthToken} from './actions/auth';


const store = createStore(
  combineReducers({
      form: formReducer,
      lifts: liftReducer,
      auth: authReducer,
      program: programReducer,
      viewForm: viewFormReducer
     
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;