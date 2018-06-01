import {
  GET_LIFTS_SUCCESS, GET_LIFTS_ERROR, GET_LIFTS_REQUEST, POST_LIFTS_SUCCESS, POST_LIFTS_ERROR, POST_LIFTS_REQUEST
} from '../actions/lifts';

const initialState = {
  bench: 45,
  squat: 45,
  deadlift: 45,
  loading: false,
  error: null,
  success: false,
}

export const liftReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_LIFTS_REQUEST:
      return{...state, loading: true, error: null, success: false}
    case GET_LIFTS_SUCCESS:
      return { ...state, lifts: action.lifts, loading: false, success: true }
    case GET_LIFTS_ERROR:
      return { ...state, loading: false, error: action.error }

    case POST_LIFTS_REQUEST:
      return { ...state,loading: true, error: null, success: false}
    case POST_LIFTS_SUCCESS:
      return { ...state, 
        bench: action.bench, 
        squat: action.squat,
        deadlift:action.deadlift, 
        loading: false, success: true }
    case POST_LIFTS_ERROR:
      return { ...state, loading: false, error: action.error }

    default:
      return state
  }
}