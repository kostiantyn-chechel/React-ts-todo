import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = (props) => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-2 px1">
                <a href="/" className="brand-logo">TS + React</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/'>Список дел</NavLink></li>
                    <li><NavLink to='/about'>О себе</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;