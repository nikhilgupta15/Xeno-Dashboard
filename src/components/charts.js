import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class RenderChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },{
        name: '',
        data: [56, 45, 43, 44, 39, 42, 37, 40, 34]
      }],
        chart: {
        type: 'bar',
        height: 250,
        toolbar:{
            show: false,
        },
        stacked: true,
        stackType: "100%"
      },
      colors: ['#80bfff', '#f2f2f2'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      xaxis:{
        labels:{
            show: false,
        }
      },
      yaxis:{
        show: false,
      },
      grid:{
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
      }
  }
}

  render() {
    return (
      <div style={{width: 350, height: 200, margin:5}}>    
        <div className="card h-100">
        <div className="row">
              <p className="col-5 m-2">Author Sales</p>
          </div>
          <div className="mixed-chart row">
            <h6 className="col-4 d-flex align-items-center justify-content-center text-center"><strong>$64M</strong></h6>
            <Chart
            className="col-8"
              options={this.state.options}
              series={this.state.options.series}
              type="bar"
              width="200"
            />
          </div>
        </div>
      </div>
    );
  }
}