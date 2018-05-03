import React, {Component} from "react";
import "../node_modules/react-vis/dist/style.css";
import "./App.css";
import LineChart from "./components/LineSeries";
import BarChart from "./components/BarSeries";
import MarkChart from "./components/MarkSeries";
import AnimationChart from './components/AnimationChart';
import ArcChart from './components/ArcSeries';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <h3 className="App-title">Data Visualization</h3>
                    <a href="https://github.com/irhamputra" target="_blank">View Code</a>
                </div>
                <div className="App">
                    <LineChart/>
                    <MarkChart/>
                </div>
                <div className="App">
                    <BarChart/>
                    <AnimationChart/>
                </div>
                <div className="App">
                    <ArcChart/>
                </div>
            </div>
        );
    }
}

export default App;
