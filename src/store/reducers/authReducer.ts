// store/authReducer.ts
import { AuthState, User, AuthAction } from "./../types.ts";
import { SIGN_IN, SIGN_OUT } from "./../types.ts";

const initialState: AuthState = {
  user: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload as User,
      };

    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
