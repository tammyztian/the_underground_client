import {API_BASE_URL} from '../config';

export const fetchUser = () => (dispatch) => {
  dispatch(fetchUserRequest());
  fetch(`${API_BASE_URL}/api/cheeses`)
    .then(response => response.json())
    .then(user => dispatch(fetchUserSuccess(user)))
    .catch(error => dispatch(fetchUserError(error)))
};

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
  loading: true,
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = () => ({
  type: FETCH_USER_SUCCESS,
  loading: false,
  error: null,
  //user
});

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = () => ({
  type: FETCH_USER_ERROR,
  loading: false,
  //error
})

