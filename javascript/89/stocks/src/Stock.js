import React, { Component } from 'react';
import StockPrice from './StockPrice';

export default class Stock extends Component {
    state = {
        loading: false,
        companyInfo: null,
        error: null
    };

    componentDidMount() {
        this.fetchCompanyInfo();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.ticker !== this.props.ticker) {
            this.fetchCompanyInfo();
        }
    }

    fetchCompanyInfo() {
        this.setState({
            loading: true
        });

        const { ticker, apiKey } = this.props;

        let ok;
        fetch(`https://api-v2.intrinio.com/companies/${ticker}?api_key=${apiKey}`)
            .then(r => {
                ok = r.ok;
                return r.json()
            })
            .then(result => {
                if (ok) {
                    this.setState({
                        companyInfo: result,
                        error: null,
                        loading: false
                    });
                } else {
                    throw new Error(result.error);
                }
            })
            .catch(err => {
                this.setState({
                    companyInfo: null,
                    error: err.message,
                    loading: false
                });
            });
    }

    render() {
        const { companyInfo, error, loading } = this.state;

        if (loading) {
            return <h1>loading...</h1>
        }

        if (error) {
            return <h1 className="text-danger">{error}</h1>
        }

        if (!companyInfo) {
            return null;
        }

        return (
            <>
                <h1>{companyInfo.name}</h1>
                <p>{companyInfo.short_description}</p>
                <StockPrice {...this.props} />
            </>
        );
    }
}