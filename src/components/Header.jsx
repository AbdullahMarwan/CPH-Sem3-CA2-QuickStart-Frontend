import {NavLink} from "react-router-dom";
import LogIn from "./LoginForm.jsx";
import LoggedIn from "./LoggedIn.jsx";
import React from "react";

const Header = ({loggedIn, login, user, logout}) => {
    return (<ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {!loggedIn ? (<LogIn login={login}/>) :
            (<>
                <LoggedIn user={user}/>
                <button onClick={logout}>Logout</button>
            </>)}
    </ul>)
}

export default Header;