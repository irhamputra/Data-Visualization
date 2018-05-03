import React, { Component } from 'react'
import { XYPlot, XAxis, YAxis, LineSeries, MarkSeries, VerticalGridLines, HorizontalGridLines } from 'react-vis';

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

    getData(){
        return [
            [
                {x: 0, y: 8},
                {x: 1, y: 5},
                {x: 2, y: 4},
                {x: 3, y: 9},
                {x: 4, y: 1},
                {x: 5, y: 7},
                {x: 6, y: 6},
                {x: 7, y: 3},
                {x: 8, y: 2},
                {x: 9, y: 2}
            ],
            [
                {x: 0, y: 5},
                {x: 1, y: 7},
                {x: 2, y: 3},
                {x: 3, y: 8},
                {x: 4, y: 2},
                {x: 5, y: 1},
                {x: 6, y: 9},
                {x: 7, y: 3},
                {x: 8, y: 2},
                {x: 9, y: 9}
            ]
        ]
    }

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
                    />
                    <MarkSeries
                        data={this.getData()[1]}
                        animation={MODE[modeIndex]}
                        curve={'curveMonotoneX'}
                    />
                    <MarkSeries
                        data={this.getData()[0]}
                        animation={MODE[modeIndex]}
                        curve={'curveMonotoneX'}
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