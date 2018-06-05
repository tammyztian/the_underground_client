import {GET_PROGRAM_SUCCESS, GET_PROGRAM_ERROR, GET_PROGRAM_REQUEST, PUT_PROGRAM_SUCCESS, PUT_PROGRAM_ERROR, PUT_PROGRAM_REQUEST} from '../actions/program';

const initialState = {
  program: "Iron Summer",
  day: 0,
  loading: false,
  error: null,
  success: false,
}

export const programReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_PROGRAM_REQUEST:
      return{...state, loading: true, error: null, success: false}
    case GET_PROGRAM_SUCCESS:
      return { ...state, day:action.day, loading: false, success: true }
    case GET_PROGRAM_ERROR:
      return { ...state, loading: false, error: action.error }

    case PUT_PROGRAM_REQUEST:
      return { ...state,loading: true, error: null, success: false}
    case PUT_PROGRAM_SUCCESS:
      return { ...state, loading: false, success: true }
    case PUT_PROGRAM_ERROR:
      return { ...state, loading: false, error: action.error }

    default:
      return state
  }
}