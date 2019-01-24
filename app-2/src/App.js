import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: [
        'burger',
        'cheese',
        'taco',
        'tacoo99',
        'more taco',
        'asdf',
        'asdfiausdbf'
      ]
    };
  }
  render() {
    let showFoods = this.state.food.map((element, index) => {
      return <div key={index}>{element}</div>;
    });
    return (
      <div className='App'>
        <h2>{showFoods}</h2>
      </div>
    );
  }
}

export default App;
