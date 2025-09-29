import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Animation from "./components/layout/Animation";

function App() {
 

  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element = {<Home/>} ></Route>
            <Route path="/empresa" element = {<Empresa/>} ></Route>
            <Route path="/contato" element = {<Contato/>} ></Route>
        </Routes>
        <Animation />
        <Footer/>
    </Router>
  );
}

export default App;
