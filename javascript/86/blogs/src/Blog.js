import React, { Component } from 'react';
import Post from './Post';

const NUM_POSTS = 3;

export default class Blog extends Component {
    state = {
        posts: [],
        postIndex: 0,
        loading: false,
        error: null
    };

    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.blog.id !== this.props.blog.id) {
            this.fetchPosts();
        }
    }

    fetchPosts() {
        this.setState({
            loading: true
        });

        // setTimeout to fake a delay
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.blog.id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load posts for ${this.props.blog.id}`);
                    }
                    return response.json();
                })
                .then(posts => {
                    this.setState({
                        posts: posts,
                        loading: false
                    });
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        loading: false,
                        error: err.message ? err.message : 'Failed to load'
                    });
                });
        }, 1000);
    }

    handlePrevious = () => {
        this.setState({
            postIndex: this.state.postIndex - NUM_POSTS
        });
    }

    handleNext = () => {
        this.setState({
            postIndex: this.state.postIndex + NUM_POSTS
        });
    }

    render() {
        const { loading, error, posts, postIndex } = this.state;

        if (loading) {
            return <h4 className="loading">loading... </h4>;
        }
        if (error) {
            return <h4 className="error">{error}</h4>
        }

        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{this.props.blog.name}'s Blog</h2>
                {posts
                    .slice(postIndex, postIndex + NUM_POSTS)
                    .map(post => <Post key={post.id} post={post} />)}
                <button disabled={postIndex === 0} onClick={this.handlePrevious}>prev</button>
                <button disabled={postIndex > posts.length - NUM_POSTS} className="next" onClick={this.handleNext}>next</button>
            </div>
        );
    }
}