import './App.css';
import React,{useRef }from 'react';
import {BrowserRouter as Router,Routes,Route,Link, } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import {FaBars, FaTimes} from "react-icons/fa";

function App() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  const hideNavBar =()=>{
    navRef.current.classList.remove("responsive-nav")
  }

  return (
    <Router >
    <header className="header">
    <button className="the-btn-open" onClick={showNavBar}>
        <FaBars/>
      </button>
      <nav className='nav' ref={navRef}>
        <h3 className='logo'>Victoria.dev</h3>
        <div className='links'>
        <Link to="/" className="link" onClick={hideNavBar}>Home</Link>
        <Link to="/about" className="link" onClick={hideNavBar}>About</Link>
        <Link to="/?scrollTo=projects" className="link" onClick={hideNavBar}>Projects</Link>
        <Link to="/?scrollTo=contact" className="link btn" onClick={hideNavBar}>Contact</Link>
        </div>
      
      <button className="the-btn-close" onClick={showNavBar}>
          <FaTimes/>
        </button>
        </nav>
        </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
