import React, {Component} from "react";
import {XYPlot, XAxis, YAxis, ArcSeries} from "react-vis";

export default class ArcChart extends Component {
    state = {
        data: this.updateData(),
        value: false
    };

    updateData() {
        const divider = Math.floor(Math.random() * 8 + 3);
        const newData = [...new Array(5)].map((row, index) => (
            {
                color: index,
                radius0: Math.random() > 0.8 ? Math.random() + 1 : 0,
                radius: Math.random() * 3 + 1,
                angle: (index + 1) * Math.PI / divider,
                angle0: index * Math.PI / divider
            }
        ));

        return newData.concat([
            {
                angle0: 0,
                angle: Math.PI * 2 * Math.random(),
                radius: 1.1,
                radius0: 0.8
            }
        ])
    }

    render() {
        return (
            <div>
                <XYPlot
                    xDomain={[-5, 5]}
                    yDomain={[-5, 5]}
                    width={400}
                    height={400}
                >
                    <XAxis/>
                    <YAxis/>
                    <ArcSeries
                        animation
                        radiusDomain={[0, 4]}
                        data={this.state.data.map(row => {
                            if (this.state.value && this.state.value.color === row.color) {
                                return {...row, style: {stroke: 'black', strokeWidth: '1px'}}
                            }
                            return row
                        })}
                        onValueMouseOver={row => this.setState({value: row})}
                        onSeriesMouseOut={() => this.setState({value: false})}
                    />
                    <button onClick={() => {
                        this.setState({
                            data: this.updateData(),
                        })
                    }}>Update Data
                    </button>
                    <h4>Arc Chart with interaction</h4>
                </XYPlot>
            </div>
        )
    }
}