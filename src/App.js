import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import HelloWorld from "./HelloWorld";
import Voiture from "./Voiture";
import CounterController from "./CounterController";
import CounterDisplay from "./CounterDisplay";
import List from "./List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld nom="mon" prenom="ju" postId="1" />
        <Voiture marque="tesla" />

        <hr />
        <CounterController />
        <CounterDisplay />

        <List />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ju</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
