import React, { Component } from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Blog from './Blog';

export default class App extends Component {
  state = {
    selectedBlog: null
  };

  handleBlogSelected = blog => {
    this.setState({
      selectedBlog: blog
    });
  };

  handleGoHome = () => {
    this.setState({
      selectedBlog: null
    });
  }

  render() {
    return (
      <div>
        <Header onGoHome={this.handleGoHome} />
        <hr />
        <BlogList onBlogSelected={this.handleBlogSelected} />
        <hr />
        {this.state.selectedBlog && <Blog blog={this.state.selectedBlog} />}
      </div>
    );
  }
}
