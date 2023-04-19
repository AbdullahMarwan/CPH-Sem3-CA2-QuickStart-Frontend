import {useState} from 'react'
import './styles/App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import LoggedIn from "./components/LoggedIn.jsx";
import LogIn from "./components/LoginForm.jsx";

function App() {
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
        <div className="App">
            {!loggedIn ? (<LogIn login={login} />) :
                (<div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>

                    <LoggedIn user={user} />
                    <button onClick={logout}>Logout</button>
                </div>)}
        </div>
    )

    // return (
    //     <div className="App">
    //         <Header/>
    //         <Routes>
    //             <Route path="/" element={<Home/>}/>
    //         </Routes>
    //     </div>
    // )
}

export default App
