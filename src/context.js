import React, { Component } from "react";

const Context = React.createContext();

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Dou",
        email: "ilya-9596@mail.ru",
        phone: "222-333-333"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "alex@mail.ru",
        phone: "222-222-222"
      },
      {
        id: 3,
        name: "Anastasia Volkova",
        email: "anas@gmail.com",
        phone: "555-555-555"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
