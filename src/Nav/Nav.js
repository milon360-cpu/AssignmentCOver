import React from 'react';
import {NavLink} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav-container'>
            <NavLink to={"/"} className={"nav-item"}>Home</NavLink>
            <NavLink to={"/about"} className={"nav-item"}>About</NavLink>
            <NavLink to={"/contact"} className={"nav-item"}>Contact</NavLink>
        </div>
    );
};

export default Nav;