import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Header from "./components/Header.js";
import ContactList from "./components/ContactList";
import Provider from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header brand="Contact manager" />
          <div className="container">
            <ContactList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
