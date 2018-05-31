import {
  GET_LIFTS_SUCCESS, GET_LIFTS_ERROR, GET_LIFTS_REQUEST
} from '../actions'

const initialState = {
  lifts: {},
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
    default:
      return state
  }
}