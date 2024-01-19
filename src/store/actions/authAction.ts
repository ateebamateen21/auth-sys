import { User, SignInAction, SignOutAction, AuthAction } from "../types.ts";
//signinaction and signout actions unified to make authaction.


export const reduxSignIn = (user: User):AuthAction => ({
  type: "SIGN_IN",
  payload: user,
});

export const reduxSignOut = ():AuthAction => ({
  type: "SIGN_OUT",
});
