import React, {useState, useEffect} from "react"
import facade from "./apiFacade";
import Header from "./components/Header";
import Content from "./components/Content";


function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({username: "", roles: ""});

    const logout = () => {
        facade.logout();
        setLoggedIn(false);
        setUser({name: "", roles: ""})
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
            <Header loggedIn={loggedIn} login={login} user={user} logout={logout}/>
            <Content/>

        </div>
    )
}






export default App;