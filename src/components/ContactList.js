import React, { Component } from "react";
import Contact from "./Contact";

export default class ContactList extends Component {
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
