import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}

const Home = () => <div><h2>Home</h2></div>
const About = ({user}) => {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
    let data = "";
    useEffect(() => {
    }, []);
    return (
        user.roles===`user`
        // <<div><<h2>About</h2></div>

)};

export default Content;