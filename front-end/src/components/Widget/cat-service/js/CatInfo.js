import React from "react";
import PropTypes from "prop-types";
import "../css/Cat.css"

/**
 * This function returns the percentage of the cat's aspect.
 * @param aspect Cat's aspect
 */
function getPercentage(aspect) {
    const maxValue = 5
    return (aspect * maxValue / 100) * 100
}

function BarGroup(props) {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 5

    let width = widthScale(getPercentage(props.d.value))
    let yMid = props.barHeight * 0.5

    return <g className="bar-group">
        <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
        <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
        <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
}

class CatInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: "abys",
            refreshRate: props.refreshRate || 100000,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    refreshWidget = () => {
        const {setting} = this.props;
        const url = 'http://localhost:8080/api/v1/cat/info/' + this.state.breed;
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
        this.refreshWidget();
        this.interval = setInterval(this.refreshWidget, this.state.refreshRate);
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
            const name = items[0]['name']

            const aspects = [
                { name: "Adaptability", value: items[0]['adaptability'] },
                { name: "Affection Level", value: items[0]['affection_level'] },
                { name: "Child Friendly", value: items[0]['child_friendly'] },
                { name: "Dog Friendly", value: items[0]['dog_friendly'] },
                { name: "Energy Level", value: items[0]['energy_level'] },
                { name: "Grooming", value: items[0]['grooming'] },
                { name: "Health Issues", value: items[0]['health_issues'] },
                { name: "Intelligence", value: items[0]['intelligence'] },
                { name: "Shedding Level", value: items[0]['shedding_level'] },
                { name: "Social Needs", value: items[0]['social_needs'] },
                { name: "Stranger Friendly", value: items[0]['stranger_friendly'] },
                { name: "Vocalisation", value: items[0]['vocalisation'] },
            ]
            let barHeight = 30

            console.log('aspects:', aspects)
            console.log('res:', getPercentage(aspects[0]['Adaptability']))

            let barGroups = aspects.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                <BarGroup d={d} barHeight={barHeight} />
            </g>)

            return (
                <div className="cat-card">
                    <h3 className="card-title p-2"><strong>{ name }</strong></h3>

                    <svg className={"bar-svg"}>
                        <g className="bar-container">
                            <g className="chart" transform="translate(100,60)">
                                {barGroups}
                            </g>
                        </g>
                    </svg>
                </div>
            )
        }
    }
}

CatInfo.defaultProps = {
    setting : {
        breed: "abys"
    }
};

CatInfo.propTypes = {
    setting : PropTypes.object,
}

export default CatInfo;