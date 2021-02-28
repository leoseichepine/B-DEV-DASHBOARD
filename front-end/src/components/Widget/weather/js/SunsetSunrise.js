import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../css/SunsetSunrise.css"

class SunsetSunrise extends Component {
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
        const url = 'http://localhost:8080/api/v1/weather/' + location;

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
            const formattedSunrise = this.formatDate(items[0]['sunrise']);
            const formattedSunset = this.formatDate(items[0]['sunset']);

            return (
            <div className="container-sunset-sunrise">
                <svg version="1.1" id="widget" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="107 -87 740 666"
                     enableBackground="new 107 -87 740 666">
		<line id="hr" fill="none" stroke="#CFCFCF" strokeWidth="2.1012" strokeLinecap="round" strokeLinejoin="round"
              strokeMiterlimit="10" x1="802" y1="248.8" x2="152" y2="248.8"/>
                    <path id="outline_x5F_bg" fill="none" stroke="#D2E0EC" strokeWidth="8.9673" strokeMiterlimit="10"
                          d="M753.1,245
	c0,151.4-122.8,274.2-274.2,274.2S204.7,396.5,204.7,245S327.4-29.2,478.9-29.2C622.8-29.2,753.1,93.5,753.1,245z"/>
                    <path id="outline_x5F_up" fill="none" stroke="#FAB60C" strokeWidth="9.9996" strokeLinecap="round"
                          strokeLinejoin="round" strokeMiterlimit="10" d="
	M753.1,245.8c0-151.5-123-273.9-274.2-275C327.8-28.1,204.7,94.5,204.7,246"/>
                    <path id="outline_x5F_down" fill="none" stroke="#8097A7" strokeWidth="10" strokeLinecap="round"
                          strokeLinejoin="round" strokeMiterlimit="10" d="
	M204.5,250c0,151.5,124.2,269.2,273.2,271.2C629,520.2,753,402.5,753,251"/>
                    <g id="sunset_x5F_icon_1_">
			<path fill="none" stroke="#8097A7" strokeWidth="3" strokeMiterlimit="10" d="M494.3,318.2c0-8.3-6.8-15.2-15.2-15.2
		c-8.3,0-15.2,6.8-15.2,15.2"/>
                        <path fill="#8097A7" stroke="#8097A7" strokeWidth="2" strokeMiterlimit="10" d="M480.5,318.5v12.3l2.9-2.9
		c0.3-0.3,0.6-0.4,0.9-0.4c0.7,0,1.3,0.6,1.3,1.3c0,0.4-0.1,0.7-0.4,0.9l-5.1,5.1c-0.2,0.2-0.5,0.4-0.9,0.4s-0.7-0.2-0.9-0.4
		l-5.1-5.1c-0.3-0.3-0.4-0.6-0.4-0.9c0-0.8,0.7-1.3,1.3-1.3c0.4,0,0.7,0.1,0.9,0.4l2.9,2.9v-12.3c0-0.7,0.6-1.3,1.3-1.3
		C479.9,317.2,480.5,317.9,480.5,318.5z"/>

                        <line fill="none" stroke="#8097A7" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="502.9" y1="314.4" x2="508.1"
                              y2="314.4"/>

                        <line fill="none" stroke="#8097A7" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="496" y1="301" x2="499.7" y2="297.3"/>

                        <line fill="none" stroke="#8097A7" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="454.8" y1="314.4" x2="449.6"
                              y2="314.4"/>

                        <line fill="none" stroke="#8097A7" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="461.7" y1="301" x2="458" y2="297.3"/>

                        <line fill="none" stroke="#8097A7" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="479.2" y1="295.1" x2="479.2"
                              y2="289.9"/>
		</g>
                    <g id="sunrise_x5F_icon">
			<g>
				<path fill="none" stroke="#FAB60C" strokeWidth="3" strokeMiterlimit="10" d="M464,75.9c0-8.3,6.8-15.2,15.2-15.2
			c8.3,0,15.2,6.8,15.2,15.2"/>
			</g>
                        <path fill="#FAB60C" stroke="#FAB60C" strokeMiterlimit="10" d="M480.5,60.4V48l2.9,2.9c0.3,0.3,0.6,0.4,0.9,0.4
		c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.1-0.7-0.4-0.9l-5.1-5.1c-0.2-0.2-0.5-0.4-0.9-0.4s-0.7,0.2-0.9,0.4l-5.1,5.1
		c-0.3,0.3-0.4,0.6-0.4,0.9c0,0.8,0.7,1.3,1.3,1.3c0.4,0,0.7-0.1,0.9-0.4l2.9-2.9v12.3c0,0.7,0.6,1.3,1.3,1.3
		C479.9,61.7,480.5,61.1,480.5,60.4z"/>

                        <line fill="none" stroke="#FAB60C" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="502.9" y1="72" x2="508.1" y2="72"/>

                        <line fill="none" stroke="#FAB60C" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="496" y1="58.7" x2="499.7" y2="55"/>

                        <line fill="none" stroke="#FAB60C" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="454.8" y1="72" x2="449.6" y2="72"/>

                        <line fill="none" stroke="#FAB60C" strokeWidth="3" strokeLinecap="round"
                              strokeLinejoin="round" strokeMiterlimit="10" x1="461.7" y1="58.7" x2="458" y2="55"/>
		</g>
                    <g id="sun">
			<g id="icon_x5F_bg_1_">

				<image overflow="visible" opacity="0.15" enableBackground="new    " width="107" height="107"
                       xlinkHref="data:image/png;base64,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
twADANZkxJmjOBr4AAAAAElFTkSuQmCC" transform="matrix(0.9474 0 0 0.9474 152.0465 196.0988)">
				</image>
                <g>
					<circle fill="#FFFFFF" cx="202.6" cy="246" r="27.6"/>
				</g>
			</g>
                        <g id="sun_x5F_icon">
				<circle fill="#FAB60C" cx="202.1" cy="246" r="8.8"/>
                            <path fill="none" stroke="#B20000" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" d="
			M206,243.4"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="202.1" y1="236.3" x2="202.1"
                                  y2="232.4"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="195.2" y1="239.1" x2="192.5"
                                  y2="236.4"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="192.3" y1="246" x2="188.5"
                                  y2="246"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="195.2" y1="252.9" x2="192.5"
                                  y2="255.6"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="202.6" y1="255.5" x2="202.6"
                                  y2="259.4"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="209.3" y1="252.4" x2="211.9"
                                  y2="255"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="211.6" y1="245.5" x2="215.5"
                                  y2="245.5"/>

                            <line fill="none" stroke="#FAB60C" strokeWidth="0.9095" strokeLinecap="round"
                                  strokeLinejoin="round" strokeMiterlimit="10" x1="208.4" y1="238.8" x2="211.2"
                                  y2="236.1"/>
			</g>
		</g>
                    <g id="moon">
			<g id="icon_x5F_bg">

				<image overflow="visible" opacity="0.15" enableBackground="new    " width="107" height="107"
                       xlinkHref="data:image/png;base64,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" transform="matrix(0.9474 0 0 0.9474 700.5831 196.0988)">
				</image>
                <g>
					<circle fill="#FFFFFF" cx="751" cy="246" r="27.6"/>
				</g>
			</g>
                        <path id="moon_x5F_icon" fill="#8097A7"
                              d="M750.6,233.9c-22.2,11.1,4.6,37.7,15.9,15.9C756.6,253,747.4,244.6,750.6,233.9z"/>
		</g>
                    <path id="horizon_x5F_wrapper" fill="#FFFDFD" stroke="#CFCFCF" strokeWidth="1.9304"
                          strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
	M518.4,267.7h-80.8c-9.8,0-17.7-8-17.7-17.7l0,0c0-9.8,8-17.7,17.7-17.7h80.8c9.8,0,17.7,8,17.7,17.7l0,0
	C536,259.8,528.1,267.7,518.4,267.7z"/>
                    <text transform="matrix(1 0 0 1 441.9971 255.4375)" fontFamily="'Roboto'"
                          fontSize="17.053">HORIZON</text>
                    <rect x="420" y="95.9" fill="none" width="131.1" height="33"/>
                    <text transform="matrix(1 0 0 1 420.05 123.2599)" fill="#6B6B6B" fontFamily="'Roboto'"
                          fontSize="36">Sunrise</text>
                    <rect x="406.7" y="142.4" fill="none" width="145" height="51.6"/>
                    <text transform="matrix(1 0 0 1 416.7 179.4078)" fontSize="48" className="clock">{formattedSunrise}</text>
                    <rect x="423" y="355.9" fill="none" width="131.1" height="33"/>
                    <text transform="matrix(1 0 0 1 423.05 383.2599)" fill="#6B6B6B" fontFamily="'Roboto'"
                          fontSize="36">Sunset</text>
                    <rect x="407.7" y="405.4" fill="none" width="145" height="51.6"/>
                    <text transform="matrix(1 0 0 1 417.7 442.4078)" fontSize="48" className="clock">{formattedSunset}</text>
	</svg>
            </div>
            )
        }
    }
}

SunsetSunrise.defaultProps = {
    setting : {
        location: "Strasbourg",
        refreshRate: 100000
    }
};

SunsetSunrise.propTypes = {
    setting: PropTypes.object
}

export default SunsetSunrise;
