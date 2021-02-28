import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../css/DaysForecast.scss";
import "../css/TodayForecast.scss"
import "../css/ReactWeather.scss"

class ForecastWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location || "Strasbourg",
            refreshRate: 100000,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    refreshWidget = (location) => {
        if (location) {

        const url = 'http://localhost:8080/api/v1/weather/forecast/' + location;
        fetch(url)
        .then(res => res.json())
        .then((res) => {
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
    }

    componentDidMount() {
        this.refreshWidget(this.state.location);
        this.interval = setInterval(this.refreshWidget, this.state.refreshRate);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        const { setting } = this.props;
        if (setting['location'] !== undefined) {
            this.refreshWidget(setting['location']);
        }
    }

    formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();

        return hours + ':' + minutes.substr(-2)
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Widget unavailable.</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            const iconURL = items[0]['iconURL']

            return (
                <div className="rw-box">
                    <div className="rw-box-days">
                        {items.map((day, i) => {
                            const formatDate = this.formatDate(day.date)

                            if (i >= 1 && i < 5) {
                                return (
                                    <div key={`day-${i}`} className="rw-day">
                                        <div className="rw-date">{formatDate}</div>
                                        <img src={iconURL} alt="weather-icon"/>
                                        <div className="rw-desc">{day.description}</div>
                                        <div className="rw-range">
                                            {day.temperatureMax} / {day.temperatureMin} C°
                                        </div>
                                    </div>
                                );
                            }
                            return "";
                        })}
                    </div>
                </div>
            )
        }
    }
}

ForecastWeather.defaultProps = {
    setting : {
        location: "Strasbourg",
        refreshRate: 100000
    }
};

ForecastWeather.propTypes = {
    setting: PropTypes.object
}

export default ForecastWeather;
