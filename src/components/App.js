import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../styles/App.css";
import Home from "./home";
import About from "./about";
import LocationDisplay from "./locationDisplay";

function App() {
  const Notfound = () => {
    return <h1>No match</h1>;
  };
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={Notfound} />
        </Switch>
        <LocationDisplay />
      </Router>
    </>
  );
}

export { Home, About, LocationDisplay };
export default App;
