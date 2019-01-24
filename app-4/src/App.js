import React, { Component } from 'react';
import Login from './Components/Login';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userName: '',
  //     pass: ''
  //   };
  // }
  // handleClick() {
  //   alert(this.state.userName);
  // }

  // handleChangeName(val) {
  //   this.setState({
  //     userName: val
  //   });
  // }
  // handleChangePass(val) {
  //   this.setState({
  //     pass: val
  //   });
  // }
  render() {
    return (
      <div className='App'>
        <Login />
      </div>
    );
  }
}

export default App;
