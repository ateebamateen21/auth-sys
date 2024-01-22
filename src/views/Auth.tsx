//react states
import { useState } from "react";
//redux methods
import { useDispatch } from "react-redux";
//redux
import { signUp } from "../store/actions/authAction.ts";

const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const handleSignUp = () => {
    const user = {
      email,
      password,
    };
    
    dispatch(signUp(user,
       () => console.log("success", user.email)
       ));
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
      <button onClick={handleSignUp}>Sign Up</button>

      {/* <button onClick={SignUpWithGoogle}>Sign In with Google</button> */}

      {/* <button onClick={SignOut}>Sign Out</button> */}
    </>
  );
};

export default Auth;
