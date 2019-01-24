import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }
  updateText(val) {
    this.setState({
      text: val
    });
  }
  render() {
    return (
      <div className='App'>
        <input onChange={e => this.updateText(e.target.value)} />
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

export default App;
