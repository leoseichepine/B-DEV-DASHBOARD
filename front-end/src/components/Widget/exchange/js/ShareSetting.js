import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShareSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(ev){
        if(ev.currentTarget.id){
            if(ev.currentTarget.id === "share"){
                if(this.props.onValueChange){
                    this.props.onValueChange("share", ev.currentTarget.value);
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
                        <label htmlFor="share">{label.share}</label>
                        <input type="string" className="form-control" id="share"
                               defaultValue={setting.share} onChange={this.onValueChange}/>
                    </div>
                </div>
            </div>
        )

    }
}


ShareSetting.defaultProps = {
    label : {
        share : "Share",
    }
};

ShareSetting.propTypes = {
    label : PropTypes.object
}


export default ShareSetting;