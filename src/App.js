import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Header from "./components/Header.js";
import ContactList from "./components/ContactList";

class App extends Component {
  render() {
    return (
      <div>
        <Header brand="Contact manager" />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
