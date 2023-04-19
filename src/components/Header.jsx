import React from 'react';
import {Link} from "react-router-dom";
import apiFacade from "../apiFacade.js";

const Header = () => {
    return (
        <header className="container">
            <Link to="/">
            </Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">LoginPage</Link>
            </nav>
        </header>
    );
};

export default Header;
