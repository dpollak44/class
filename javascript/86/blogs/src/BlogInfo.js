import React, { Component } from 'react';
import './BlogInfo.css';

export default class BlogInfo extends Component {
    handleBlogSelected = () => {
        this.props.onBlogSelected(this.props.blog);
    }

    render() {
        //export default props => {
        const { blog/*, onBlogSelected*/ } = this.props;
        return (
            <div className="blog" onClick={this.handleBlogSelected/*() => onBlogSelected(blog)*/}>
                <div className="title">{blog.name}</div>
                <div className="website">{blog.website}</div>
                <div className="company">
                    <div>{blog.company.name}</div>
                    <div>{blog.company.catchPhrase}</div>
                    <div>{blog.company.bs}</div>
                </div>
            </div>
        );
    }
}