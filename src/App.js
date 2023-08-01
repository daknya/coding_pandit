import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Team from './pages/ourteam'
import Events from './pages/events'
import Resources from './pages/resources'
import Register from './pages/register'
import './style/index.scss'

function App() {

  window.addEventListener('scroll', setScrollVar);
  window.addEventListener('resize', setScrollVar);


  function setScrollVar() {
    const htmlElement = document.documentElement;
    const PercentageOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;

    htmlElement.style.setProperty("--scroll", Math.min(PercentageOfScreenHeightScrolled * 100, 100))
  }
  setScrollVar();

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/ourteam" element={<Team />}></Route>
            <Route exact path="/events" element={<Events />}></Route>
            <Route exact path="/resources" element={<Resources />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
