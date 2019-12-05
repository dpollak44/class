import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogInfo.css';

export default class BlogInfo extends Component {
    /*handleBlogSelected = () => {
        this.props.onBlogSelected(this.props.blog);
    }*/

    render() {
        //export default props => {
        const { blog/*, onBlogSelected*/ } = this.props;
        return (
            <Link to={`/blog/${blog.id}`} className="blog">
                <div className="title">{blog.name}</div>
                <div className="website">{blog.website}</div>
                <div className="company">
                    <div>{blog.company.name}</div>
                    <div>{blog.company.catchPhrase}</div>
                    <div>{blog.company.bs}</div>
                </div>
            </Link>
        );
    }
}