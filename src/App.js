import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import RenderChart from "./components/charts"
import Chart1 from "./components/chart1"
import Chart2 from "./components/chart2"
import Card from "./components/cards";
import Card1 from "./components/cards1";
import Chart3 from "./components/chart3";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div id="App">
      <NavigationBar></NavigationBar>
      <div  style={{marginLeft: 210,}} className="row">
        <RenderChart className="col-4 p-2"></RenderChart>
        <Chart1 className="col-4 m-2"></Chart1>
        <Chart2 className="col-4 m-2"></Chart2>
      </div>
      <div  style={{marginLeft: 210,marginTop:0}} className="row">
        <Card></Card>
      </div>
      <div  style={{marginLeft: 210,marginTop:0}} className="row">
        <Card1></Card1>
        <Chart3></Chart3>
      </div>
      </div>
    );
  }
}

export default App;