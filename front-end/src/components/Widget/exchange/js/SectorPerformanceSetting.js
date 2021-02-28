import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SectorPerformanceSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(ev){
        if(ev.currentTarget.id){
            if(ev.currentTarget.id === "rank"){
                if(this.props.onValueChange){
                    this.props.onValueChange("rank", ev.currentTarget.value);
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
                        <label htmlFor="rank">{label.rank}</label>
                        <input type="string" className="form-control" id="rank"
                               defaultValue={setting.rank} onChange={this.onValueChange}/>
                    </div>
                </div>
            </div>
        )

    }
}


SectorPerformanceSetting.defaultProps = {
    label : {
        rank : "Rank",
    }
};

SectorPerformanceSetting.propTypes = {
    label : PropTypes.object
}


export default SectorPerformanceSetting;