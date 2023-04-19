import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <div>
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                </Routes>

                <footer className="container">
                    &copy;2022 | <a
                    href="https://www.schoolhacks.eu"
                    target="_blank"
                    rel="noreferrer noopener"
                >SchoolHacks</a>
                </footer>
            </div>
        </BrowserRouter>
    </React.StrictMode>
)
