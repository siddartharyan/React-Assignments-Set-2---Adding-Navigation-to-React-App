import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LocationDisplay from "./LocationDisplay";
import "../styles/App.css";

function App() {
  const Home = () => {
    return <h1>You are home.</h1>;
  };
  const About = () => {
    return <h1>You are on the about page.</h1>;
  };
  const Notfound = () => {
    return <h1>No match</h1>;
  };
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <div id="main">
        <Switch>
          <Route exact default path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={Notfound} />
        </Switch>
        <LocationDisplay />
      </div>
    </Router>
  );
}

export default App;
