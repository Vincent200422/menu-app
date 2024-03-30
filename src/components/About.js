// components/About.js
import React, { Component } from 'react';
import franceMapImage from '../images/france-map.jpg'; // Путь к изображению

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capital: "Paris",
      famousLandmarks: ["Eiffel Tower", "Louvre", "Notre-Dame"],
      description: "France is a country located in Western Europe, known for its historical landmarks, exquisite cuisine, and cultural heritage."
    };
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <p>{this.state.description}</p>
        <p>The capital of France is {this.state.capital}, the city of love and light, famous for its symbols such as the {this.state.famousLandmarks.join(", ")}</p>
        <p>France is also famous for its picturesque countryside, charming villages, and beautiful coastline along the Mediterranean Sea and the Atlantic Ocean.</p>
        <img src={franceMapImage} alt="France Map" style={{ maxWidth: '100%' }} />
      </div>
    );
  }
}

export default About;
