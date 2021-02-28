import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WeatherSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(ev){
        if(ev.currentTarget.id){
            if(ev.currentTarget.id === "location"){
                if(this.props.onValueChange){
                    this.props.onValueChange("location", ev.currentTarget.value);
                }
            }
        }
        console.log(ev);
    }

    render() {
        const {setting, label} = this.props;
        return (
            <div className="row user-activity-setting">
                <div className="col-xs-12">
                    <div className="form-group">
                        <label htmlFor="location">{label.location}</label>
                        <input type="string" className="form-control" id="location"
                              defaultValue={setting.location} onChange={this.onValueChange}/>
                    </div>
                </div>
            </div>
        )
    }
}


WeatherSetting.defaultProps = {
    label : {
        location : "Location",
    }
};

WeatherSetting.propTypes = {
    label : PropTypes.object
}


export default WeatherSetting;