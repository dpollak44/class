import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {
    /*state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 }
        ]
    }

    handleIncrement = (counter) => {
        counter.value = counter.value + 1;
        this.setState({
            counters: this.state.counters
        });
    }*/

    render() {
        return (
            <>
                {/*this.state.counters.map(counter => <Counter key={counter.id} counter={counter} handleIncrement={this.handleIncrement} />)*/}
                {this.props.counters.map(counter => <Counter key={counter.id} counter={counter} handleIncrement={this.props.handleIncrement} />)}
            </>
        );
    }
}