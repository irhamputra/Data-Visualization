import React, { Component } from 'react'
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines } from 'react-vis';

export default class BarChart extends Component {
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
        return(
            <div>
                <XYPlot height={400} width={400}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    <VerticalBarSeries data={this.getData()[0]} curve={'curveMonotoneX'} />
                    <VerticalBarSeries data={this.getData()[1]} curve={'curveMonotoneX'} color="#FF9833"/>
                    <h4>Last Year</h4>
                </XYPlot>
            </div>
        )
    }
}