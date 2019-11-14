import React, { Component } from 'react';

export default class Counter extends Component {
    /*state = {
        value: this.props.counter.value
    };*/

    /*handleIncrement = () => {
        //this.props.counter.value = this.props.counter.value + 1;

        this.setState({
            value: this.state.value + 1
        });
    }*/
    handleIncrement = () => {
        this.props.handleIncrement(this.props.counter);
    }

    render() {
        return (
            <div>
                <span>{/*this.state.value*/this.props.counter.value}</span>
                <button onClick={/*this.*/ this.handleIncrement}>+</button>
            </div>
        );
    }
}