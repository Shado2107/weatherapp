import React from 'react';
import Form from './Form';

const Navbar = () => {
    return (
        <nav>
                    <ul className="navbar-container">
                        <li className="navbar-list-item">
                            <Form/>
                        </li>
                        <li className="navbar-list-item city-name">
                            <span></span>
                        </li>
                        <li className="navbar-list-item">
                            
                        </li>
                    </ul>
        </nav>
    );
};

export default Navbar;