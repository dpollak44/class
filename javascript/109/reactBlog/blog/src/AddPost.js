import React, { Component } from 'react'
import './AddPost.css';

export default class AddPost extends Component {
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const resp = await fetch(`/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: this.state.title, content: this.state.content })
      });

      if (!resp.ok) {
        return console.error(resp.statusText);
      }

      this.props.history.push('/');
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <form id="addPost" onSubmit={this.handleSubmit}>
        <label>Title:
          <input name="title" onChange={this.handleInputChange} />
        </label>
        <label>Content:
          <textarea name="content" onChange={this.handleInputChange}></textarea>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}