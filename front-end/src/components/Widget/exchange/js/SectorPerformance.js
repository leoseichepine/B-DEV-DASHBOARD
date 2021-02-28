import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../css/Share.css";

class SectorPerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: props.rank || "A",
            refreshRate: 100000,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    refreshWidget = () => {
        const url = 'http://localhost:8080/api/v1/exchange/performance/' + this.state.rank;

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
        this.refreshWidget(this.state.rank);
        this.interval = setInterval(this.refreshWidget, this.state.refreshRate);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        const { setting } = this.props;
        if (setting['rank'] !== undefined) {
            this.refreshWidget(setting['rank']);
        }
    }

    /**
     * This function returns the className of the text by evaluating a percentage.
     */
    getClassText(percentage) {
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
            const description = items[0]['description']

            const communication_services = items[0]['sectors']['Communication Services']
            const consumer_disc = items[0]['sectors']['Consumer Discretionary']
            const consumer_staples = items[0]['sectors']['Consumer Staples']
            const energy = items[0]['sectors']['Energy']
            const financials = items[0]['sectors']['Financials']
            const health = items[0]['sectors']['Health Care']
            const industrials = items[0]['sectors']['Industrials']
            const information_tech = items[0]['sectors']['Information Technology']
            const materials = items[0]['sectors']['Materials']
            const real_estate = items[0]['sectors']['Real Estate']
            const utilities = items[0]['sectors']['Utilities']

            return (
                <div className="card">
                    <div className="card-body d-flex flex-wrap">
                        <h2 className="card-title p-2"><strong>{ description }</strong></h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Communication Services: </strong>
                            <span className={ this.getClassText(communication_services) }>
                                { communication_services }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Consumer Discretionary: </strong>
                            <span className={ this.getClassText(consumer_disc) }>
                                { consumer_disc }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Consumer Staples: </strong>
                            <span className={ this.getClassText(consumer_staples) }>
                                { consumer_staples }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Energy: </strong>
                            <span className={ this.getClassText(energy) }>
                                { energy }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Financials: </strong>
                            <span className={ this.getClassText(financials) }>
                                { financials }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Health Care: </strong>
                            <span className={ this.getClassText(health) }>
                                { health }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Industrials: </strong>
                            <span className={ this.getClassText(industrials) }>
                                { industrials }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Information Technology: </strong>
                            <span className={ this.getClassText(information_tech) }>
                                { information_tech }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Materials: </strong>
                            <span className={ this.getClassText(materials) }>
                                { materials }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Real Estate: </strong>
                            <span className={ this.getClassText(real_estate) }>
                                { real_estate }
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Utilities: </strong>
                            <span className={ this.getClassText(utilities) }>
                                { utilities }
                            </span>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}

SectorPerformance.defaultProps = {
    setting : {
        rank: "A",
        refreshRate: 100000
    }
};

SectorPerformance.propTypes = {
    setting: PropTypes.object
}

export default SectorPerformance;
