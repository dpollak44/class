import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default props => {
    return (
        <header>
            <h1>PCS Blogs</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>Blog List</NavLink> | <NavLink to="/test">Test</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}