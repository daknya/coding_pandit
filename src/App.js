import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Team from './pages/ourteam'
import Events from './pages/events'
import Resources from './pages/resources'
import Register from './pages/register'
import './style/index.scss'

function App() {
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
