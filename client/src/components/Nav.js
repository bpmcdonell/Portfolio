import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-4">
                    <Link to="/">
                        About Me
                    </Link>
                </li>
                <li className="mx-4">
                    <Link to="/work">
                        My Work
                    </Link>
                </li>
                <li className="mx-4">
                    <Link to="/contact">
                        Contact Me
                    </Link>
                </li>
                <li className="mx-4">
                    <Link to="/resume">
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;