import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';


export const GET_LIFTS_REQUEST = 'GET_LIFTS_REQUEST'
export const getLiftsRequest = () => ({
  type: GET_LIFTS_REQUEST
})

export const GET_LIFTS_ERROR = 'GET_LIFTS_ERROR'
export const getLiftsError = () => ({
  type: GET_LIFTS_ERROR
})

export const GET_LIFTS_SUCCESS = 'GET_LIFTS_SUCCESS'
export const getLiftsSuccess = () => ({
  type: GET_LIFTS_SUCCESS
})

export const POST_LIFTS_REQUEST = 'POST_LIFTS_REQUEST'
export const postLiftsRequest = () => ({
  type: POST_LIFTS_REQUEST
})

export const POST_LIFTS_SUCCESS = 'POST_LIFTS_SUCCESS'
export const postLiftsSuccess = lifts=> ({
  type: POST_LIFTS_SUCCESS,
  bench: lifts.bench,
  squat: lifts.squat,
  deadlift: lifts.deadlift
})

export const POST_LIFTS_ERROR = 'POST_LIFTS_ERROR'
export const postLiftsError = error => ({
  type: POST_LIFTS_ERROR,
  error
})

export const getLifts = () => dispatch => {
  fetch(`${API_BASE_URL}/lifts`)
    .then(res => {
      return res.json();
    })
      .then(dispatch(getLiftsSuccess()))
      .catch((err) => dispatch(getLiftsError(err)))


}

export const postLifts = lifts => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(postLiftsRequest())
  console.log('POST request to post lift sent!');
  console.log(lifts);
  return fetch(`${API_BASE_URL}/lifts`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body:JSON.stringify(lifts)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json()) 
    .then(data => dispatch(postLiftsSuccess(data)))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
          return Promise.reject(
              new SubmissionError({
                  [location]: message
              })
          );
      }
    });
}