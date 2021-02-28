import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CatBreedSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(ev){
        if(ev.currentTarget.id){
            if(ev.currentTarget.id === "breed"){
                if(this.props.onValueChange){
                    this.props.onValueChange("breed", ev.currentTarget.value);
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
                        <label htmlFor="breed">{label.breed}</label>
                        <input type="string" className="form-control" id="breed"
                               defaultValue={setting.breed} onChange={this.onValueChange}/>
                    </div>
                </div>
            </div>
        )

    }
}

CatBreedSetting.defaultProps = {
    label : {
        breed: "Breed",
    }
};

CatBreedSetting.propTypes = {
    label : PropTypes.object
}

export default CatBreedSetting;