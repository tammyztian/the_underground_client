import {VIEW_FORM_TRUE, VIEW_FORM_FALSE} from '../actions/viewform';

const initialState = {
  viewForm: true
}

export const viewFormReducer = (state = initialState, action) => {
  switch (action.type){
    case VIEW_FORM_FALSE:
      return{...state, viewForm: false}
    case VIEW_FORM_TRUE:
      return { ...state, viewForm: true}
    default:
      return state
  }
}