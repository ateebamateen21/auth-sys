// the method we selected in firebase console.
import { createUserWithEmailAndPassword } from "firebase/auth";
//auth variable from confid file which has our configurations
import { auth } from "../config/firebase";
//react states
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
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
    </>
  );
};

export default Auth;
