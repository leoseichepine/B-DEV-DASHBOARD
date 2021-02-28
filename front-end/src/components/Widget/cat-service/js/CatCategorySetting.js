import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CatCategorySetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(ev){
        if(ev.currentTarget.id){
            if(ev.currentTarget.id === "category"){
                if(this.props.onValueChange){
                    this.props.onValueChange("category", ev.currentTarget.value);
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
                        <label htmlFor="category">{label.category}</label>
                        <input type="string" className="form-control" id="category"
                               defaultValue={setting.category} onChange={this.onValueChange}/>
                    </div>
                </div>
            </div>
        )

    }
}

CatCategorySetting.defaultProps = {
    label : {
        category: "Category",
    }
};

CatCategorySetting.propTypes = {
    label : PropTypes.object
}

export default CatCategorySetting;