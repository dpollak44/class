import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import './Authentication.css';

export default class Authentication extends Component {
  state = {}

  render() {
    const loginLogout = this.state.user ?
      <Logout user={this.state.user} onLogout={this.logout} /> :
      <Login onLogin={this.login} onRegister={this.register} />

    return (
      <div className="authenticate">
        {loginLogout}
      </div>
    );
  }

  register = async (user, password) => {
    try {
      const resp = await fetch(`/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
      });

      if (!resp.ok) {
        return console.error(resp.statusText);
      }
    } catch (e) {
      console.error(e);
    }
  }

  login = async (user, password) => {
    try {
      const resp = await fetch(`/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
      });

      if (!resp.ok) {
        return console.error(resp.statusText);
      }
      this.setState({
        user
      });
    } catch (e) {
      console.error(e);
    }
  }

  logout = async () => {
    try {
      const resp = await fetch(`/logout`);

      if (!resp.ok) {
        return console.error(resp.statusText);
      }

      this.setState({
        user: null
      });
    } catch (e) {
      console.error(e);
    }
  }
}
