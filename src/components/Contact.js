// components/Contact.js
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Email submitted: ' + this.state.email);
  }

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="email" value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
