import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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

export const POST_LIFT_SUCCCESS = 'POST_LIFTS_REQUEST'
export const postLiftsSuccess = () => ({
  type: POST_LIFT_SUCCCESS
})

export const POST_LIFT_ERROR = 'POST_LIFTS_ERROR'
export const postLiftsError = () => ({
  type: POST_LIFT_ERROR
})

export const getLifts = lifts => dispatch => {
  dispatch(getLiftsRequest())
  fetch(`${API_BASE_URL}/lifts`)
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        dispatch(getLiftsError(res.statusText))
      }
    })
    .then(lifts => dispatch(getLiftsSuccess(lifts)))
    .catch(err => dispatch(postLiftsError(err)))

}

export const postLifts = lifts => dispatch => {
  dispatch(postLiftsRequest())
  console.log('fetch request to post lift sent!');
  return fetch(`${API_BASE_URL}/lifts`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(lifts)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (res.status === 201) dispatch(postLiftsSuccess)
      else return res.json()
    })
    .then(err => dispatch(postLiftsError(err)))
    .catch(err => dispatch(postLiftsError(err)))
      // const {reason, message, location} = err;
      // if (reason === 'ValidationError'){
      //   return Promise.reject(
      //     new SubmissionError({
      //       [location]:message
      //     })
      //   );
      // }
}