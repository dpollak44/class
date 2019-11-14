import React, { Component } from 'react';
import Counters from './Counters';
import Total from './Total';

export default class App extends Component {
  state = {
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
  }

  render() {
    return (
      <div>
        <Total total={this.state.counters.reduce((acc, cv) => acc + cv.value, 0)} />
        <Counters counters={this.state.counters} handleIncrement={this.handleIncrement} />
      </div >
    );
  }
}
