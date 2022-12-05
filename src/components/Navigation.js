import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

function Navigation({isAuthenticated, toggleIsAuthenticated}) {
    return (
        <nav className="nav-container">
            <ul className="list">
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Home</NavLink>
                </li>
                {isAuthenticated &&
                    <li>
                        <NavLink to="/blogposts" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Blogposts</NavLink>
                    </li>
                }
                {!isAuthenticated ?
                    <li>
                        <NavLink to="/login" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Login</NavLink>
                    </li> :
                    <li>
                        <NavLink to="/" onClick={toggleIsAuthenticated} className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Logout</NavLink>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Navigation;