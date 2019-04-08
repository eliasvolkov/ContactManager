import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export default class ContactList extends Component {
  onDelete = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  onDelete={() => this.onDelete(contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
