import rootReducer from './reducers/index'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
  rootReducer
)

export default store;