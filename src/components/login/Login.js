import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="main_r1">
            <div className="colore11"></div>
            <div className="colore21"></div>
            <div className="main_box_right1">
               <h1 className="h111">Login</h1>
               <form className="f_r1" onSubmit={handleSubmit}>
               { error && <h4 variant="danger">{error}</h4>}
                    <input className="r11" type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
                    <input className="r11" type="password"placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="btn11">Login</button>
                </form>
                <div className="p-4 box mt-3 text-center">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                 </div>
                 <div className="gb" onClick={handleGoogleSignIn}>Google login</div>
            </div>
        </div>
    </>
  );
};

export default Login;
