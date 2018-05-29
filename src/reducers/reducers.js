import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from '../actions/user';

const initialState = {
  user:[],
  loading:false,
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: action.loading
      };
      break;
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        user: action.user
      };
      break;
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
      break;
    default:
      return state;
  };
}