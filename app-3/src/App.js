import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: [
        'Mo',
        'Gary',
        'JoeDirt',
        'TCanyon',
        'GimpBoyRDEE',
        'tripEXPoLIFE',
        'joezzxx'
      ],
      userInput: '',
      filterNames: ''
    };
  }
  //I dont think this is right.
  handleChange(val) {
    this.setState({
      filterNames: val
    });
  }

  render() {
    // let showNames = this.state.names.map((element, index) => {
    //   return <div key={index}>{element}</div>;
    // });

    // let filterName = this.state.names.filter((e, i) => {
    //   console.log('e', e);
    //   console.log('i', i);
    //   if (e.includes(this.state.userInput)) {
    //     return <div key={i}>{e}</div>;
    //   }
    // });
    let filterNames = this.state.names
      .filter((element, index) => {
        return element.includes(this.state.filterNames);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div className='App'>
        <input
          onChange={e => this.handleChange(e.target.value)}
          type={'text'}
        />
        {filterNames}
        {/* <h1>{showNames}</h1> */}
        {/* <h2>{this.state.filteredNames}</h2> */}
        {/* <h2>{filterName}</h2> */}
        {/* {console.log('cl', filterName)} */}
      </div>
    );
  }
}

export default App;
