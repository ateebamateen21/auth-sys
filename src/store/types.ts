// store/types.ts
//INTERFACES FOR INITIAL STATE AND USER DETAILS
export interface AuthState {
  loading: boolean;
  user: User | null;
  error: string;
  // Add other properties relevant to authentication
}

export interface User {
  email: string;
  password: string;
  // Add other user-related properties
}

// //TYPES FOR ACTIONS

// export type SignUpAction = {
//   type: "SIGN_UP";
//   payload: {
//     user:User;
//   };
//   onSuccess: () => void;
// };

// export type SignOutAction = {
//   type: "SIGN_OUT";
// };

// export type AuthAction = SignUpAction | SignOutAction;
//simplifying types a bit

export type Terror = string;
export type Tuser = User | null;
export interface AuthAction {
  type: string; // Generalize the type to string
  payload: Terror | Tuser; // Allow any payload, TypeScript will infer based on usage
}



//BASE ACTION TYPES FOR SIGN_UP
export const SIGN_UP_LOADING = "SIGN_UP_LOADING";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
// export const SIGN_OUT = "SIGN_OUT";
