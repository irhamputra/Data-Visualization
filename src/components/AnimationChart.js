import React, { Component } from 'react'
import { XYPlot, XAxis, YAxis, MarkSeries, VerticalGridLines, HorizontalGridLines } from 'react-vis';

const generateData = () => (
    [...new Array(10)].map(row => (
        {
            x: Math.random() * 5,
            y: Math.random() * 10
        }
    ))
);

const MODE = [
    "gentle",
    "wobbly",
    "Stiff"
];

export default class AnimationChart extends Component {
    state = {
        data: generateData(),
        modeIndex: 1
    };

    render(){
        const { modeIndex, data } = this.state;
        return(
            <div>
                <XYPlot height={400} width={400}>
                    <button onClick={() => this.setState({ data: generateData() })}>Update Data</button>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    <MarkSeries
                        data={data}
                        animation={MODE[modeIndex]}
                        curve={'curveMonotoneX'}
                        color="#FF9833"
                    />
                    <MarkSeries
                        data={data}
                        animation={MODE[modeIndex]}
                        curve={'curveMonotoneX'}
                    />
                    <h4>Animation Chart</h4>
                </XYPlot>
            </div>
        )
    }
}