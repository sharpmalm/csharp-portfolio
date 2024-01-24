import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './Components/About';

const Homepage = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={<Home />} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound} />
                </Routes>
            </Router>
        </div>
    );
};

const Home = () => "Home Page";
const NotFound = () => "NotFound Page";
const Header = () => {
     return(
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
           <div className="container-fluid">
             <ul className="navbar-nav me-auto">
               <li className="nav-item">
                 <Link  className="nav-link" to="/about">About</Link>
               </li>
               <li className="nav-item">
                 <Link  className="nav-link" to="/projects">Projects</Link>
               </li>
              </ul>
            </div>
         </nav>
     );
}

export default Homepage;