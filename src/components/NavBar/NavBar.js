import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }
    return (
        <header>
            <h3>Logo.</h3>
            <nav ref={navRef}>
                <NavLink to={'#'} onClick={showNavbar}>Home</NavLink>
                <NavLink to={'/'} onClick={showNavbar}>About</NavLink>
                <NavLink to={'/'} onClick={showNavbar}>Work</NavLink>
                <NavLink to={'/'} onClick={showNavbar}>Contact</NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </header>
    )
}

export default NavBar