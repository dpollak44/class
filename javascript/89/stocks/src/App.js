import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import StockPicker from './StockPicker';
import Stock from './Stock';

export default class App extends Component {
  state = {
    apiKey: 'OjIxY2YwNWVhZDU0YjgyMzg2ZTk0NWYxOGM3M2I1NGU4',
    ticker: null
  };

  handleTickerSelected = ticker => {
    this.setState({
      ticker: ticker
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <StockPicker onSubmit={this.handleTickerSelected} apiKey={this.state.apiKey} />
        <hr />
        {this.state.ticker && <Stock {...this.state} />}
      </div>
    );
  }
}
