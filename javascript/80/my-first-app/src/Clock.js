import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
    state = {
        currentTime: new Date()
    };

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ currentTime: new Date() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const styles = { fontStyle: "italic" };
        return (
            <h4 className="clock" style={{ fontStyle: "italic" }/*styles*/}>{this.state.currentTime.toLocaleTimeString()}</h4>
        );
    }
}