import React from "react";
import PropTypes from "prop-types";
import "../css/Cat.css"

class CatCategoryImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.category || "1",
            refreshRate: props.refreshRate || 100000,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    refreshWidget = (category) => {
        const {setting} = this.props;
        const url = 'http://localhost:8080/api/v1/cat/image/category/' + this.state.category;
        fetch(url)
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(res);
                    this.setState({
                        isLoaded: true,
                        items: res
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
        this.refreshWidget(this.state.category);
        this.interval = setInterval(this.refreshWidget, this.state.refreshRate);
    }

    componentDidUpdate() {
        const { setting } = this.props;
        if (setting['category'] !== undefined) {
            this.refreshWidget(setting['category']);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    /**
     * This function capitalize the first letter of a string.
     *
     * @param string
     * @returns {string}
     */
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const { error, isLoaded, items} = this.state;
        if (error) {
            return <div>Widget unavailable.</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log(items);
            const imageUrl = items[0]['url'];
            const name = items[0]['categories'][0]['name']

            return (
                <div className="cat-card">
                    <h3 className="card-title p-2"><strong>{ this.capitalizeFirstLetter(name) }</strong></h3>
                    <img src={imageUrl} alt={"cat"}/>
                </div>
            )
        }
    }
}

CatCategoryImage.defaultProps = {
    setting : {
        category: "1"
    }
};

CatCategoryImage.propTypes = {
    setting : PropTypes.object,
}

export default CatCategoryImage;