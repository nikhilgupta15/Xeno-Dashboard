import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [{
          name: "STOCK ABC",
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
          chart: {
            height: 200,
            type: 'area',
            background: '#fff',
            stacked: true,
            offsetY: 15,
            offsetX: 12,
            zoom: {
              enabled: false
            },
            toolbar:{
              show:false,
            }
          },
          plotOptions: {
            enabled: false,
            dataLabels:{
                enabled:true,
              }
            
          },
          stroke: {
            curve: 'smooth'
          },
          colors: ["#3F51B5", '#2196F3'],
          
          fill: {
            type: 'gradient',
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: "vertical",
              opacityFrom: 0.9,
              opacityTo: 0.6,
              stops: [0, 100, 100, 100]
            }
          },
         
          markers: {
            show:false,
            size: 0,
            style: 'hollow',
            strokeWidth: 8,
            strokeColor: "#fff",
            strokeOpacity: 0.25,
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0
            }
          },
          yaxis: {
            show: false
          },
          labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002', '01/21/2002', '01/22/2002', '01/23/2002'],
          xaxis: {
            labels:{
              show:false,
            },
            type: 'datetime',
            tooltip: {
              enabled: false
            }
          },
        }
        
      
      
      };
    }

  render() {
    return (
      <div style={{ width: 350,margin:5 }}>
        <div className="card h-100">
          <div className="row">
            <p className="col-5 m-2">Total Orders</p>
          </div>
          <div className="mixed-chart row">
            <h6 className="col-4 d-flex align-items-center justify-content-center text-center">
                <strong>17M</strong>
            </h6>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="225"
            />
          </div>
        </div>
      </div>
    );
  }
}
