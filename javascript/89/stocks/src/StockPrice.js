import React, { Component } from 'react';
import './StockPrice.css';

export default class StockPrice extends Component {
    state = {
        priceData: null
    };

    componentDidMount() {
        this.startFetching();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.ticker !== this.props.ticker) {
            this.startFetching();
        }
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    getRandomNumber(min, max) {
        return parseFloat((Math.random() * (max - min + 1) + min).toFixed(2));
    }

    startFetching() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        this.interval = setInterval(() => {
            this.fetchData();
        }, 5000);

        this.fetchData(); // show immediately
    }

    fetchData() {
        const { ticker, apiKey } = this.props;
        let ok;

        fetch(`https://api-v2.intrinio.com/securities/${ticker}/prices/realtime?api_key=${apiKey}`)
            .then(r => {
                /*if (!r.ok) {
                    throw new Error('OOPS!');
                }*/
                ok = r.ok;
                return r.json()
            })
            .then(result => {
                if (ok) {
                    result.last_price = (result.last_price + this.getRandomNumber(-1, 1)).toFixed(2);
                    this.setState({
                        priceData: result,
                        lastPrice: this.state.priceData ? this.state.priceData.last_price : result.last_price
                    });
                } else {
                    throw new Error(result.error);
                }
            })
            .catch(err => {
                console.error(err.message);
            });
    }

    render() {
        const { priceData } = this.state;

        if (!priceData) {
            return null;
        }

        const lastUpdate = new Date(priceData.last_time).toLocaleString();
        const difference = priceData.last_price - this.state.lastPrice;

        return (
            <h2>
                <span className={difference > 0 ? 'up' : difference < 0 ? 'down' : ''}>{priceData.last_price}</span> updated at: {lastUpdate}
            </h2>
        );
    }
}
