import React, { Component } from 'react'
import Post from './Post';
import io from 'socket.io-client';

export default class Posts extends Component {
  state = {
    posts: []
  };

  render() {
    const posts = this.state.posts.map(p => <Post key={p._id} post={p} />);
    return (
      <>
        {posts}
      </>
    );
  }

  async componentDidMount() {
    try {
      const resp = await fetch('http://localhost/posts', {
        credentials: 'include'
      });
      if (!resp.ok) {
        return console.error(resp.statusText)
      }
      const posts = await resp.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.error(e);
    }

    this.socket = io('http://localhost');
    this.socket.on('comment', commentData => {
      const posts = [...this.state.posts];
      const index = posts.findIndex(p => p._id === commentData.postId);
      const post = posts[index] = { ...posts[index] };
      post.comments = post.comments || [];
      post.comments.push(commentData.comment);

      this.setState({
        posts
      });
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }
}