import React from 'react'
import "./Header.css"
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import { Link } from 'react-router-dom';

function Header() {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <>
       
         <nav className="nav navcoler">
        <div className="left">
            <h1>Rohit</h1>
        </div>
    
        <div className="right">
             <ul>
             <Link to="/home" style={{textDecoration:'none'}}><li className="li">Home </li></Link>
                
                
             <Link to="/mynotes" style={{textDecoration:'none'}}><li className="li">My Notes</li></Link>
             </ul>
             <button className="btn5"  onClick={handleLogout} > Logout</button>  
        </div>
    </nav>
    {/* ------------------------------------------------------ */}
    <div className="page11">
   <div className="page1_left1">
    <h1>Hello Welcome </h1>
    <h5>{user && user.email}</h5>
   </div>
   </div>

   </>
  )
}

export default Header