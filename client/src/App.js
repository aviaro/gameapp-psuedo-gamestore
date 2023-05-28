import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//IMPORT SCREENS
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Game from "./pages/Game";
import Cart from "./pages/cart";
import GameDetails from './components/GameDetails';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/game" element={<Game />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/game-details" element={<GameDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
