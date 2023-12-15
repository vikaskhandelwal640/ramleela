import React, { useState } from "react";
import { MenuItems } from "./MenuItems.js";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';

import "./NavbarStyles.css";

const Navbar = () => {
  const navigate = useNavigate();
  
  // Set state
  const [clicked, setClicked] = useState(false);

  // Make Handleclick Function
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <button onClick={() => navigate("SignIn")}>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;