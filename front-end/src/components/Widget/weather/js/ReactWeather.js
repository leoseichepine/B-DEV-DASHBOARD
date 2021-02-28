import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../css/ReactWeather.scss";
import "../css/TodayForecast.scss"

class ReactWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location || "Strasbourg",
      refreshRate: 100000,
      error: null,
      isLoaded: false,
      items: []
    };
  }

  refreshWidget = (location) => {
      if (location) {
        const url = 'http://localhost:8080/api/v1/weather/' + location;

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

    formatDay(date) {
        return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
        return <div>Widget unavailable.</div>
        } else if (!isLoaded) {
        return <div>Loading...</div>
        } else {
        const today = new Date();
        const day = this.formatDay(today);

        const temp = items[0]['temperature'];
        const minTemp = items[0]['temperatureMax'];
        const maxTemp = items[0]['temperatureMin'];
        const wind = items[0]['wind']
        const humidity = items[0]['humidity']
        const description = items[0]['description']
        const place = items[0]['place']

        const iconURL = items[0]['iconURL']

        return (
            <div className="rw-box">
                <div className={`rw-main type-today`}>
                <div className="rw-box-left">
                    <h2>{place}</h2>
                    <div className="rw-today">
                    <div className="date">{day}</div>
                    <div className="hr"/>
                    <div className="current">
                        {temp} C°
                    </div>
                    <div className="range">
                        {maxTemp} / {minTemp} C°
                    </div>
                    <div className="desc">
                        <img src={iconURL} alt="weather-icon"/>
                        &nbsp;{description}
                    </div>
                    <div className="hr"/>
                    <div className="info">
                        <div>
                        Wind: <b>{wind}</b> km/h
                        </div>
                        <div>
                        Humidity: <b>{humidity}</b> %
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
        }
    }
}

ReactWeather.defaultProps = {
  setting : {
    location: "Strasbourg",
    refreshRate: 100000
  }
};

ReactWeather.propTypes = {
  setting: PropTypes.object
}

export default ReactWeather;