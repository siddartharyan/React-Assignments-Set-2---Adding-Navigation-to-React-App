import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LocationDisplay from "./LocationDisplay";
import About from "./About";
import Home from "./Home";
import Notfound from "./Notfound";
import "../styles/App.css";

function App() {
  // const About = () => {
  //   return <h1>You are on the about page.</h1>;
  // };
  // const Home = () => {
  //   return <h1>You are home.</h1>;
  // };
  // const Notfound = () => {
  //   return <h1>No match</h1>;
  // };
  return (
    <>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <Switch>
        <Route exact default path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={Notfound} />
      </Switch>
      <LocationDisplay />
    </>
  );
}

export default App;
