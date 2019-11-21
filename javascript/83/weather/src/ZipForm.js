import React, { Component } from 'react';

export default class ZipForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.getWeather(e);
    }

    render() {
        return (
            <>
                {this.props.children}
                <form onSubmit={this.handleSubmit}>
                    <input name="zip" value={this.props.zip} onChange={this.props.handleZipChange} />
                </form >
            </>
        );
    }
};