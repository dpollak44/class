import React, { Component } from 'react'
import './AddComment.css';

export default class AddComment extends Component {
  render() {
    return (
      <div id="addComment">
        <textarea ref="content"></textarea>
        <button onClick={this.addComment}>add comment</button>
        <button onClick={this.complete}>cancel</button>
      </div>
    );
  }

  addComment = async () => {
    try {
      const resp = await fetch(`http://localhost/posts/${this.props.id}/comments`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: this.refs.content.value })
      });

      if (!resp.ok) {
        return console.error(resp.statusText);
      }
      this.complete();
    } catch (e) {
      console.error(e);
    }
  }

  complete = () => {
    this.props.onComplete();
  }
}