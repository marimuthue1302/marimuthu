import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
// import Image from '../../assets/images/M.jpg'

const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <div className="navbar">
      <header>
        <h3 className="logo">Logo.
        </h3>
        {/* <div className="logo">
          <img src={Image} alt="" />
        </div> */}
        <nav ref={navRef} className='nav-container'>
          <NavLink className='list' to={"#"} onClick={showNavbar}>
            Home
          </NavLink>
          <NavLink className='list' to={"/"} onClick={showNavbar}>
            About
          </NavLink>
          <NavLink className='list' to={"/"} onClick={showNavbar}>
            Experiance
          </NavLink>
          <NavLink className='list' to={"/"} onClick={showNavbar}>
            Projects
          </NavLink>
        <span className="contact contact-mobile" onClick={showNavbar}>Contact</span>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <span className="contact contact-desktop">Contact</span>
        <button className="nav-btn" onClick={showNavbar}>
          <RiMenu4Fill />
        </button>
      </header>
      <ProgressBar />
    </div>
  );
};

export default NavBar;
