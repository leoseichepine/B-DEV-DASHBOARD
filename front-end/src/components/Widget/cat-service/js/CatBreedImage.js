import React from "react";
import PropTypes from "prop-types";
import "../css/Cat.css"

class CatBreedImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: props.breed || "abys",
            refreshRate: props.refreshRate || 100000,
            error: null,
            isLoaded: false,
            items: []
        };
    }

  refreshWidget = (breed) => {
    const {setting} = this.props;
    const url = 'http://localhost:8080/api/v1/cat/image/breed/' + this.state.breed;
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
    this.refreshWidget(this.state.breed);
    this.interval = setInterval(this.refreshWidget, this.state.refreshRate);
  }

    componentDidUpdate() {
        const { setting } = this.props;
        if (setting['breed'] !== undefined) {
            this.refreshWidget(setting['breed']);
        }
    }

  componentWillUnmount() {
    clearInterval(this.interval);
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
        const name = items[0]['breeds'][0]['name']

        return (
          <div className="cat-card">
              <h3 className="card-title p-2"><strong>{ name }</strong></h3>
              <img src={imageUrl} alt={"cat"}/>
          </div>
        )
    }
  }
}

CatBreedImage.defaultProps = {
  setting : {
      breed: "abys"
  }
};

CatBreedImage.propTypes = {
  setting : PropTypes.object,
}

export default CatBreedImage;