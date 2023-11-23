import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="main_r">
            <div className="colore1"></div>
            <div className="colore2"></div>
            <div className="main_box_right">
               <h1 className="h11">Signup</h1>
               <form className="f_r" onSubmit={handleSubmit}>
                {error && <h5 variant="danger">{error}</h5>}
                    <input className="r1" type="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="r1" type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                    <button className="btn1">Signup</button>
                </form>
                <div className="p-4 box mt-3 text-center">
                   Already have an account? <Link to="/">Log In</Link>
                 </div>
            </div>
        </div>
    </>
  );
};

export default Signup;
