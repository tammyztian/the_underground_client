import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';

export const RESET_SUCCESS = 'RESET_SUCCESS'
export const resetSuccess = () => ({
  type: RESET_SUCCESS

})
export const GET_PROGRAM_REQUEST = 'GET_PROGRAM_REQUEST'
export const getProgramRequest = () => ({
  type: GET_PROGRAM_REQUEST
})

export const GET_PROGRAM_ERROR = 'GET_PROGRAM_ERROR'
export const getProgramError = () => ({
  type: GET_PROGRAM_ERROR
})

export const GET_PROGRAM_SUCCESS = 'GET_PROGRAM_SUCCESS'
export const getProgramSuccess = day => ({
  type: GET_PROGRAM_SUCCESS,
  day
})

export const PUT_PROGRAM_REQUEST = 'PUT_PROGRAM_REQUEST'
export const putProgramRequest = () => ({
  type: PUT_PROGRAM_REQUEST,
  //day: program.day,

})

export const PUT_PROGRAM_SUCCESS = 'PUT_PROGRAM_SUCCESS'
export const putProgramSuccess = day => ({
  type: PUT_PROGRAM_SUCCESS,
  day: day
})

export const PUT_PROGRAM_ERROR = 'PUT_PROGRAM_ERROR'
export const putProgramError = error => ({
  type: PUT_PROGRAM_ERROR,
  error
})

export const POST_PROGRAM_REQUEST = 'POST_PROGRAM_REQUEST'
export const postProgramRequest = () => ({
  type: POST_PROGRAM_REQUEST,

})

export const POST_PROGRAM_SUCCESS = 'POST_PROGRAM_SUCCESS'
export const postProgramSuccess = day => ({
  type: POST_PROGRAM_SUCCESS,
  day: day
})

export const POST_PROGRAM_ERROR = 'POST_PROGRAM_ERROR'
export const postProgramError = error => ({
  type: POST_PROGRAM_ERROR,
  error
})

//Get program for the day
export const getProgram = () =>(dispatch, getState) => {
  const authToken = getState().auth.authToken;
  let day;
  dispatch(getProgramRequest())
  return fetch(`${API_BASE_URL}/program`,{
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      Authorization: `Bearer ${authToken}`
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(res =>  res.json())
      .then (data => {
      day = data.day
      return (dispatch(getProgramSuccess(day)))
      })
    .catch(err => {
      const {reason, message, location} = err;
      dispatch(getProgramError(err));
      if (reason === 'ValidationError') {
        return Promise.reject(
            new SubmissionError({
                [location]: message
            })
        );
      }
    });
}




//move to next day after submitted 
export const updateProgramRecord = day => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(putProgramRequest())
  const bodyRequest = {day}
  return fetch(`${API_BASE_URL}/program`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body:JSON.stringify(bodyRequest)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(putProgramSuccess(data.day)))
    .catch(err => {
      const {reason, message, location} = err;
      dispatch(getProgramError(err));
      if (reason === 'ValidationError') {
        return Promise.reject(
            new SubmissionError({
                [location]: message
            })
        );
      }
    })
}

//POST first record for program day
export const createProgramRecord = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(postProgramRequest())
  //console.log('POST request to post PROGRAM sent!');
  const bodyRequest = {day: 0}
  return fetch(`${API_BASE_URL}/program`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body:JSON.stringify(bodyRequest)


  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => dispatch(putProgramSuccess(data.day)))
      // console.log(data);
      // console.log(`this is input into program success ${data}`)
      .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    })

}