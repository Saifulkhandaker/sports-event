import { Link, NavLink } from "react-router-dom";

import logo from "../assets/Images/Logo.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navber = () => {

  const {user, logOut} = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }

    const navlinks = <>
     <li className="text-lg font-medium"> <NavLink to="/">Home</NavLink></li>
     <li className="text-lg font-medium"> <NavLink to="/about">About</NavLink></li>
     <li className="text-lg font-medium"> <NavLink to="/news">Events</NavLink></li>
     <li className="text-lg font-medium"> <NavLink to="/contact">Contact</NavLink></li>
     
    
    </>

    return (
        <div>
             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlinks}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end gap-2">
  <p className="hidden md:block md:text-lg">{user?.displayName}</p>
  < img className="h-[55px] rounded-full" src={user?.photoURL} />
          
       
      {
        user ?
      <Link to="/login">
       <button onClick={handleSignOut} className="btn">LogOut</button>
      </Link>
        :
        <Link to="/login" >
        <button className="btn">LogIn</button>
        </Link>
      }

  
  </div>
</div>      
</div>
    );
};

export default Navber;