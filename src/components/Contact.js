import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    showMoreInfo: false
  };

  onHandlePerson = () => {
    this.setState(({ showMoreInfo }) => {
      return {
        showMoreInfo: !showMoreInfo
      };
    });
  };

  render() {
    const { name, email, phone, onDelete } = this.props;
    const { showMoreInfo } = this.state;
    let person = null;
    if (showMoreInfo) {
      person = (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      );
    }
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onHandlePerson}
            className="fa fa-sort-down "
            style={{ cursor: "pointer" }}
          />
          <i
            onClick={onDelete}
            className="fa fa-times"
            style={{ cursor: "pointer", color: "red", float: "right" }}
          />
        </h4>
        {person}
      </div>
    );
  }
}
