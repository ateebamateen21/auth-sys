import { ThunkAction } from "redux-thunk";
// the method we selected in firebase console.

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
//auth and googleProvider variable from confid file which has our configurations
import { auth, googleProvider } from "../../config/firebase.ts";
//react states
import { useState } from "react";
//redux methods
import { useDispatch } from "react-redux";
//redux actions

import { User, AuthAction, Terror, Tuser, SIGN_UP_ERROR, SIGN_UP_SUCCESS, SIGN_UP_LOADING } from "../types.ts";
//AuthAction = SignUpAction | SignOutAction;

//we're now going to handle all the firebase SignUp and SignOut methods in this file.

//WE WILL CREATE THREE BASIC ACTIONS: FOR SIGNING UP A USER. ONE FOR LOADING, ONE FOR ERROR, AND ONE FOR SUCCESS. [COMBINED INTO ONE BIG THUNK ACTION OF SIGNING UP]
//SIMILARYL THREE ACTIONS FOR SIGNING OUT A USER. ONE FOR LOADING, ONE FOR ERROR, AND ONE FOR SUCCESS. [COMBINED INTO ONE BIG THUNK ACTION OF SIGNING OUT]

//Base actions for signing up.

const signUpRequest = (user: User) => {
  return {
    type: SIGN_UP_LOADING,
  };
};

const signUpSuccess = (user:any) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: user,
  };
};

const signUpError = (error: string) => {
  return {
    type: SIGN_UP_ERROR,
    payload: error,
  };
};

// thunk action for signUp

export const signUp =
  (user : User, onSuccess: () => void) => async (dispatch:any) => {
    await dispatch(signUpRequest(user));
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      dispatch(signUpSuccess(response))
      console.log(response);
      onSuccess();
    } catch (error) {
      dispatch(signUpError(String(error)));
    }
  };


// export const signUp = (
//   user: User,
//   onSuccess: () => void
// ): ThunkAction<void, RootState, undefined, AuthAction> => async (dispatch) => {
//   dispatch(signUpRequest(user));

//   try {
//     // Your asynchronous logic, for example, an API call
//     // Replace the following line with your actual logic
//     const response = await someApiSignUpFunction(user);

//     // Dispatch the success action with the user data
//     dispatch(signUpSuccess(response.user as Tuser));
    
//     // Call the success callback
//     onSuccess();
//   } catch (error) {
//     // Dispatch the error action with the error message
//     dispatch(signUpError(String(error)));
//   }
// };
