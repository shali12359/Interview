import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import axios from "axios";


import Login from "./COmponents/Login";
import Register from "./COmponents/Register";
import Home from "./COmponents/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
