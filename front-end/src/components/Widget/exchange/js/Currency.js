import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../css/Share.css";

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from_currency_code: props.from_currency_code || "btc",
            to_currency_code: props.to_currency_code || "eth",
            refreshRate: 100000,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    refreshWidget = () => {
        const url = 'http://localhost:8080/api/v1/exchange/currency/'
            + this.state.from_currency_code + ":" + this.state.to_currency_code;

        fetch(url)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        items: res.items
                    })
                },
                (err) => {
                    this.setState({
                        isLoaded: false,
                        error: "Unabled to load data."
                    });
                }
            )
    }

    componentDidMount() {
        this.refreshWidget(this.state.from_currency_code, this.state.to_currency_code);
        this.interval = setInterval(this.refreshWidget, this.state.refreshRate);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        const { setting } = this.props;
        if (setting['from_currency_code'] !== undefined && setting['to_currency_code'] !== undefined) {
            this.refreshWidget(setting['from_currency_code'], setting['to_currency_code']);
        }
    }

    /**
     * This function returns the className of the text by evaluating the value.
     */
    getClassText(value) {
        if (parseFloat(value) > 0.0) {
            return "text-success"
        } else {
            return "text-danger"
        }
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Widget unavailable.</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            const from_currency_code = items[0]['from_currency_code']
            const to_currency_code = items[0]['to_currency_code']
            const exchange_rate = items[0]['exchange_rate']
            const bid_price = items[0]['bid_price']
            const ask_price = items[0]['ask_price']

            return (
                <div className="card">
                    <div className="card-body d-flex flex-wrap">
                        <h2 className="card-title p-2"><strong>{ from_currency_code } - { to_currency_code }</strong></h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Exchange Rate: </strong>
                            <span className={this.getClassText(exchange_rate)}>{ exchange_rate }</span>
                        </li>
                        <li className="list-group-item"><strong>Bid Price:</strong> { bid_price }</li>
                        <li className="list-group-item"><strong>Ask Price:</strong> { ask_price }</li>
                    </ul>
                </div>
            )
        }
    }
}

Currency.defaultProps = {
    setting : {
        from_currency_code: "btc",
        to_currency_code: "eth",
        refreshRate: 100000
    }
};

Currency.propTypes = {
    setting: PropTypes.object
}

export default Currency;
