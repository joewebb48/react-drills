import React, { Component } from 'react';
import Image from './Components/Image';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* I had an image from google that was not working. so I had to cheat and steal the solution */}
        <Image myImage={'https://http.cat/409'} />
      </div>
    );
  }
}

export default App;
