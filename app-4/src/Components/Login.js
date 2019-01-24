import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      pass: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }
  handleClick() {
    alert(`UserName: ${this.state.userName} Password: ${this.state.pass}`);
  }

  handleChangeName(val) {
    this.setState({
      userName: val
    });
  }
  handleChangePass(val) {
    this.setState({
      pass: val
    });
  }
  render() {
    return (
      <div>
        <input
          onChange={e => {
            this.handleChangeName(e.target.value);
          }}
        />
        <input
          onChange={e => {
            this.handleChangePass(e.target.value);
          }}
        />
        <button onClick={e => this.handleClick(e.target.value)}>Login</button>
      </div>
    );
  }
}
