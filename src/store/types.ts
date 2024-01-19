// store/types.ts
//INTERFACES FOR INITIAL STATE AND USER DETAILS
export interface AuthState {
  user: User | null;
  // Add other properties relevant to authentication
}

export interface User {
  email: string;
  password: string;
  // Add other user-related properties
}

//TYPES FOR ACTIONS

export type SignInAction = {
  type: "SIGN_IN";
  payload: {
    /* signIn-specific payload */
  };
};

export type SignOutAction = {
  type: "SIGN_OUT";
};

export type AuthAction = SignInAction | SignOutAction;



//TYPES;
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
