import React, { Component } from 'react';
import './Post.css';
import AddComment from './AddComment';
import Comment from './Comment';

export default class Post extends Component {
  state = {};

  render() {
    const { post } = this.props;

    const addCommentButton = this.state.addingComment ?
      null :
      <button className="addComment" onClick={this.addComment}>add comment</button>;

    const addComment = this.state.addingComment ?
      <AddComment onComplete={this.commentComplete} id={post._id} /> :
      null;

    const comments = post.comments
      ? post.comments.map((c, i) => <Comment key={i} comment={c} />)
      : null;

    return (
      <div className="post" id={post._id}>
        <h2>{post.title}</h2>
        <h3>by {post.author} on {new Date(post.date).toLocaleString()}</h3>
        <div>{post.content}</div>

        <div className="comments">
          {addCommentButton}
          {addComment}
          {comments}
        </div>
      </div>
    );
  }

  addComment = () => {
    this.setState({
      addingComment: !this.state.addingComment
    });
  }

  commentComplete = () => {
    this.setState({
      addingComment: false
    });
  }
}