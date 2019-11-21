import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contactus">Contact Us</NavLink></li>
            </ul>
        </nav>
    );
}