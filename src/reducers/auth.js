import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../actions/auth';

const initialState = {
  authToken: null, 
  currentUser: null,
  loading: false,
  error: null,
  success: false
};

export const authReducer = (state = initialState, action) => {
  if (action.type === SET_AUTH_TOKEN) {
      return {...state, authToken: action.authToken}
      
  } else if (action.type === CLEAR_AUTH) {
      return {...state, authToken: null, currentUser: null}
  } else if (action.type === AUTH_REQUEST) {
      return {...state, loading: true, error: null }
  } else if (action.type === AUTH_SUCCESS) {
      return {...state, loading: false, currentUser: action.currentUser};
  } else if (action.type === AUTH_ERROR) {
      return {...state, loading: false, error: action.error};
  }
  return state;
}
