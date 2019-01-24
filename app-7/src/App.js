import React, { Component } from 'react';
import NewTask from './Components/NewTask';
import List from './Components/List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
  }
  addTask(task) {
    this.setState({
      tasks: [...this.state.list, task]
    });
  }
  render() {
    return (
      <div className='App'>
        <h1>Tasks:</h1>
        <NewTask add={this.addTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
