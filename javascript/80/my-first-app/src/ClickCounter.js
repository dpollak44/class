import React, { Component } from 'react';

export default class ClickCounter extends Component {
    /*state = {
        clickCount: 0
    }*/

    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    //handleClick() {
    handleClick = () => {
        console.log('Button was clicked');
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }

    render() {
        return (
            <button onClick={this.handleClick}>I was clicked {this.state.clickCount} times</button>
            // <button onClick={this.handleClick.bind(this)} > I was clicked {this.state.clickCount} times</button>
            // <button onClick={() => { this.handleClick() }}>I was clicked {this.state.clickCount} times</button>
        );
    }
}