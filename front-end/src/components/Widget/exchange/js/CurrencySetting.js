import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CurrencySetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(ev){
        if(ev.currentTarget.id){
            if(ev.currentTarget.id === "from_currency_code"){
                if(this.props.onValueChange){
                    this.props.onValueChange("from_currency_code", ev.currentTarget.value);
                }
            }
            if(ev.currentTarget.id === "to_currency_code"){
                if(this.props.onValueChange){
                    this.props.onValueChange("to_currency_code", ev.currentTarget.value);
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
                        <label htmlFor="from_currency_code">{label.from_currency_code}</label>
                        <input type="string" className="form-control" id="from_currency_code"
                               defaultValue={setting.from_currency_code} onChange={this.onValueChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="to_currency_code">{label.from_currency_code}</label>
                        <input type="string" className="form-control" id="to_currency_code"
                               defaultValue={setting.to_currency_code} onChange={this.onValueChange}/>
                    </div>
                </div>
            </div>
        )

    }
}


CurrencySetting.defaultProps = {
    label : {
        from_currency_code: "From currency code",
        to_currency_code: "To currency code",
    }
};

CurrencySetting.propTypes = {
    label : PropTypes.object
}


export default CurrencySetting;