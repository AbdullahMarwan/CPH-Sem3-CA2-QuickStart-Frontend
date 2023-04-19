import React, {useState} from 'react';
import LogIn from "./LoginForm.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import LoggedIn from "./LoggedIn.jsx";
import loggedIn from "./LoggedIn.jsx";
import facade from "../apiFacade.js";

const LoginPage = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({username:"", roles:""});

    const logout = () => {
        facade.logout();
        setLoggedIn(false);
        setUser({name:"", roles:""})
    }
    const login = (user, pass) => {
        facade.login(user, pass).then(() => {
            const token = facade.readJwtToken(facade.getToken());
            setUser({username: token.username, roles: token.roles});
            setLoggedIn(true);
        });
    }
    return (
        <div>
            {!loggedIn ? (<LogIn login={login} />) :
                (<div>
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Home/>}/>*/}
                    {/*</Routes>*/}

                    <LoggedIn user={user} />
                    <button onClick={logout}>Logout</button>
                </div>)}
        </div>
    );
};

export default LoginPage;
