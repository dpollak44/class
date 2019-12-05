import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import Header from './Header';
import BlogList from './BlogList';
import Test from './Test';
import Blog from './Blog';
import './App.css';

export default class App extends Component {
  state = {
    selectedBlog: null
  };

  /*handleBlogSelected = blog => {
    this.setState({
      selectedBlog: blog
    });
  };*/

  render() {
    // <Route path="/blogs" exact render={() => <BlogList onBlogSelected={this.handleBlogSelected} />} />
    // <Route path="/blog" render={() => <Blog blog={this.state.selectedBlog} />} />
    return (
      <BrowserRouter>
        <div>
          <Header />
          <hr />
          <Switch>
            <Route path="/blogs" exact component={BlogList} />
            <Route path="/test" component={Test} />
            <Route path="/blog/:blogId" component={Blog} />
            <Redirect exact from="/" to="/blogs" />
            <Route render={() => <h1 className="fourOhFour">No such page. 404 <Link to="/">Click to go to home page</Link></h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
