import React, { Component, PureComponent } from 'react';
import Counters from './Counters';
import Total from './Total';

export default class App extends PureComponent {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 }
    ]
  }

  handleIncrement = (counter) => {
    /*counter.value = counter.value + 1;
    this.setState({
      counters: this.state.counters
    });*/

    const newCounter = { ...counter };
    newCounter.value++;

    const newCounters = [...this.state.counters];
    newCounters[this.state.counters.indexOf(counter)] = newCounter;

    this.setState({
      counters: newCounters
    });
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state.counters !== nextState.counters;
  }*/

  render() {
    return (
      <div>
        <Total total={this.state.counters.reduce((acc, cv) => acc + cv.value, 0)} />
        <Counters counters={this.state.counters} handleIncrement={this.handleIncrement} />
      </div >
    );
  }
}
