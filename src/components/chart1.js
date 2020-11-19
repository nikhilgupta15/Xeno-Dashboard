import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [44, 55, 17],
        options: {
          chart: {
            height: 150,
            type: 'donut',
            offsetY: -5,
            offsetX: -5
          },
          plotOptions: {
            pie: {
              customScale: 0.86,
              donut: {
                size: '72%',
              },
              dataLabels: {
                enabled: false
              }
            }
          },
          colors: ['#775DD0', '#00C8E1', '#FFB900'],
          
          series: [2, 7, 5],
          labels: ['Social Media', 'Blog', 'External'],
          legend: {
            show: false
          }
        }
      
      
      };
    }

  render() {
    return (
      <div style={{ width:350,margin:5 }}>
        <div className="card h-100">
          <div className="row">
            <p className="col-5 m-2">Technologies</p>
          </div>
          <div className="mixed-chart row">
            <h6 className="col-4 d-flex align-items-center justify-content-center text-center">
                <strong>9.3M</strong>
            </h6>
            <Chart
            className="col-8"
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="200"
            />
          </div>
        </div>
      </div>
    );
  }
}
