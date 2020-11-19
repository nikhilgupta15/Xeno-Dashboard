import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class Chart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
        options: {
          chart: {
            type: 'bar',
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
          },
        },
      
      
      };
    }

  render() {
    return (
      <div style={{width: 710, margin:5}}>    
        <div className="card h-100">
        <div className="row">
              <p className="col-5 m-2">Sales Statistics</p>
          </div>
          <div className="mixed-chart row">
            <Chart
            className="col-8"
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="700"
            />
          </div>
        </div>
      </div>
    );
  }
}