// store/authReducer.ts
import { AuthState, User, AuthAction, Tuser, Terror } from "./../types.ts";
import {SIGN_UP_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERROR} from "./../types.ts";

const initialState: AuthState = {
  loading: true,
  user: null,
  error: '',
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type){
    case SIGN_UP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload as Tuser,
        error: '',
      };

      case SIGN_UP_ERROR:
        return {
          ...state,
          loading: false,
          user: null,
          error: action.payload as Terror,
        };

        default:
          return state;


  }
  }


export default authReducer;
