// the method we selected in firebase console.
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
//auth and googleProvider variable from confid file which has our configurations
import { auth, googleProvider } from "../config/firebase.ts";
//react states
import { useState } from "react";
//redux methods
import { UseSelector, useDispatch } from "react-redux";
//redux actions
import { reduxSignIn, reduxSignOut } from "../store/actions/authAction.ts";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //checking the currently signed in user
  // console.log(auth?.currentUser?.email);
  // console.log(auth.currentUser?.photoURL)

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(reduxSignIn({ email, password }));
      console.log("You signed in succesfully");
    } catch (err) {
      console.error(err);
    }
  };

  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const SignOut = async () => {
    try {
      // Call Firebase signOut with the auth object
      await signOut(auth);

      // Dispatch Redux action to update store state
      dispatch(reduxSignOut()); //clears the redux store from that user
    } catch (err) {
      console.error(err);
    }
    console.log("You are now signed out");
  };

  return (
    <>
      <h1>Hello, this is our authentication system</h1>

      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>

      <button onClick={SignInWithGoogle}>Sign In with Google</button>

      <button onClick={SignOut}>Sign Out</button>
    </>
  );
};

export default Auth;
