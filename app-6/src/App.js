import React, { Component } from 'react';
import Todo from './Todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      userInput: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  handleChange(val) {
    this.setState({
      userInput: val
    });
  }
  addTask() {
    this.setState({
      tasks: [...this.state.tasks, this.state.userInput],
      userInput: ''
    });
  }

  render() {
    console.log(this.state.userInput);
    let tasks = this.state.tasks.map((e, i) => {
      return <Todo key={i} task={e} />;
    });
    return (
      <div className='App'>
        <h1>Tasks:</h1>
        <input
          value={this.state.userInput}
          onChange={e => this.handleChange(e.target.value)}
          placeholder={'Enter new task:'}
        />
        <button onClick={this.addTask}>Add:</button>
        <br />
        <br />
        {tasks}
      </div>
    );
  }
}

export default App;
