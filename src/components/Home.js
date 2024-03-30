// components/Home.js
import React, { Component } from 'react';
import franceImage from '../images/france.jpg'; // Путь к изображению

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: "Welcome to France!"
    };
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>{this.state.welcomeMessage}</p>
        <p>France is a beautiful country with a rich history and culture. It is known for its historical landmarks, exquisite cuisine, fashion, and art. Come and enjoy all the delights of France!</p>
        <img src={franceImage} alt="France" style={{ maxWidth: '100%' }} />
      </div>
    );
  }
}

export default Home;
