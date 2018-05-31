import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => (dispatch) => {
  console.log('register user POST ran');
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    // .then(data => {
    //   //handle successful response from server
    // })
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError'){
        return Promise.reject(
          new SubmissionError({
            [location]:message
          })
        );
      }
    });
   
};
