import React, { useEffect, useState } from "react";
import classes from "../assets/Styles/navbar.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/PW_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { backendUrl } from '../App';


const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [csrfToken, setCsrfToken] = useState();

  useEffect(() => {


  }, []);

  const logOutHandler = async () => {
    try {
      const response = await fetch(backendUrl + "/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",

        },
      });

      dispatch(setUser(null));
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
  };

  return (
    <div className={classes.NavAll}>
      <Link to="/" className={classes.logoLink}>
        <img src={Logo} alt="logo" />
        <p className={classes.name}>PropertyWala</p>
      </Link>
      {user && (
        <div className={classes.userProfile}>
          <Link className={classes.icon} to="/profile">
            <p>{user.name[0]}</p>
          </Link>
          <p className={classes.navUserName}>{user.name}</p>
          <Link>
            <button className={classes.navSignup} onClick={logOutHandler}>
              Logout
            </button>
          </Link>
        </div>
      )}

      {!user && (
        <div className={classes.NavButtons}>
          <Link to="/login">
            <button className={classes.navLogin}>Login</button>
          </Link>
          <Link to="/register">
            <button className={classes.navSignup}>register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
