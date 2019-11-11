import React, { Component } from 'react';

export function WelcomeF(props) {
    return (
        <h1>Welcome {props.name}!</h1>
    );
}

export default class WelcomeC extends /*React.*/Component {
    constructor(props) {
        super(props);

        //this.counter = 0;
        //setInterval(() => this.counter++, 1000);

        this.state = {
            counter: 0,
            foo: 'bar'
        };

        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 });
            // console.log(this.state);
        }, 1000);
    }

    render() {
        //x = 5;
        return (
            <> {/* React.Fragment */}
                <h1>Welcome {this.props.name}</h1> {/* React.createElement */}
                <h2>{this.state.counter}</h2>
            </>
        );
    }
}