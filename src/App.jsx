import {useState} from 'react'
import './styles/App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";

function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App
