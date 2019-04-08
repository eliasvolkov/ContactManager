import React, { Component } from "react";
import Contact from "./Contact";

export default class ContactList extends Component {
  onDelete = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };
  render() {
    let person;
    person = this.state.contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          onDelete={() => this.onDelete(contact.id)}
        />
      );
    });

    return <div>{person}</div>;
  }
}
