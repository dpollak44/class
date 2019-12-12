import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

/*export default class StockPicker extends Component {
    state = {
        ticker: ''
    };

    handleTickerChange = e => {
        this.setState({
            ticker: e.target.value.toUpperCase()
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.ticker);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Choose a stock:</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.ticker} onChange={this.handleTickerChange} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary">update</button>
                    </div>
                </div>
            </form>
        );
    }
}*/

export default class StockPicker extends Component {
    state = {
        ticker: '',
        options: []
    };

    componentDidMount() {
        fetch(`https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=${this.props.apiKey}`)
            .then(r => {
                if (!r.ok) {
                    throw new Error('cant load company data');
                }
                return r.json()
            })
            .then(results => {
                this.setState({
                    options: results.companies.map(c => c.ticker)
                });
            })
            .catch(err => {
                console.error(err.message);
            });
    }

    handleOnChange = selected => {
        if (selected.length) {
            this.setState({
                ticker: selected[0]
            })
        }
    }

    handleOnInputChange = text => {
        this.setState({
            ticker: text.toUpperCase()
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.ticker);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <Typeahead
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        onInputChange={this.handleOnInputChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary">update</button>
                    </div>
                </div>
            </form>
        );
    }
}