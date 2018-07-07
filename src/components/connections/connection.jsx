import React, { Component } from 'react';
import styled from 'react-emotion';

const ConnectionFields = styled('div')`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 2rem auto;
  width: 60%;

  fieldset {
    border: none;
    display: inline-block;
    margin: 0 auto;
    width: 20rem;
  }

  label {
    display: inline-block;
    height: 1.5rem;
    margin: 1rem auto 0.5rem;
    width: 100%;

    input {
      border: none;
      border-bottom: 2px solid black;
      height: 1.5rem;
      font-size: 1.05rem;
      padding-left: 0.25rem;
      width: 100%;
    }
  }

  button {
    margin: 1rem auto 0;
    width: 200px;
  }
`;

export class Connection extends Component {
  constructor() {
    super();
    this.state = {
      connection: {
        name: '',
        host: '',
        username: '',
        password: '',
        database: '',
        port: 0,
      },
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    const connection = Object.assign(this.state.connection, {
      [e.target.name]: e.target.value,
    });

    this.setState({ connection });
  }

  render() {
    return (
      <ConnectionFields>
        <fieldset>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              value={this.state.connection.name}
              onChange={this.onInput}
              type="text"
              placeholder="Connection Name"
            />
          </label>

          <label htmlFor="host">
            Host
            <input
              id="host"
              name="host"
              value={this.state.connection.host}
              onChange={this.onInput}
              type="text"
              placeholder="Host"
            />
          </label>

          <label htmlFor="username">
            Username
            <input
              id="username"
              name="username"
              value={this.state.connection.username}
              onChange={this.onInput}
              type="text"
              placeholder="Username"
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              value={this.state.connection.password}
              onChange={this.onInput}
              type="password"
              placeholder="Password"
            />
          </label>
        </fieldset>
        <button>Connect</button>
      </ConnectionFields>
    );
  }
}
