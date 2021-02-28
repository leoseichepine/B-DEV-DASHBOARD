import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../css/Share.css";

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            share: props.share || "msft",
            refreshRate: 100000,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    refreshWidget = () => {
        const url = 'http://localhost:8080/api/v1/exchange/share/' + this.state.share;

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
        this.refreshWidget(this.state.share);
        this.interval = setInterval(this.refreshWidget, this.state.refreshRate);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        const { setting } = this.props;
        if (setting['share'] !== undefined) {
            this.refreshWidget(setting['share']);
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

    /**
     * This function returns the className of the text by evaluating a percentage.
     */
    getClassTextFromPercentage(percentage) {
        let formatted = percentage
        formatted = formatted.toString().replace('%', '');

        if (parseFloat(formatted) > 0.0) {
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
            const symbol = items[0]['symbol']
            const close = items[0]['previous_close']
            const change = items[0]['change']
            const change_percent = items[0]['change_percent']
            const high = items[0]['high']
            const low = items[0]['low']
            const volume = items[0]['volume']

            return (
                <div className="card">
                    <div className="card-body d-flex flex-wrap">
                        <h2 className="card-title p-2"><strong>{ symbol }</strong></h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Close:</strong> <span className="text-primary">{ close }</span></li>
                        <li className="list-group-item"><strong>High:</strong> <span className="text-success">{ high }</span></li>
                        <li className="list-group-item"><strong>Low:</strong> <span className="text-danger">{ low }</span></li>
                        <li className="list-group-item"><strong>Volume:</strong> { volume }</li>
                        <li className="list-group-item">
                            <strong>Change:</strong>
                            <span className={ this.getClassText(change) }>{ change }</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Change percent:</strong>
                            <span className={ this.getClassTextFromPercentage(change_percent) }>{ change_percent }</span>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}

Share.defaultProps = {
    setting : {
        share: "msft",
        refreshRate: 100000
    }
};

Share.propTypes = {
    setting: PropTypes.object
}

export default Share;
