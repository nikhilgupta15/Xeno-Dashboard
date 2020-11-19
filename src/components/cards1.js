import React, { Component } from "react";
export default class Card1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row m-0">
        <div
          style={{ width: 350, marginLeft: 5, marginTop: 5, marginRight: 5 }}
        >
          <div className="card h-100">
            <div className="row">
              <p className="col-6 m-2">Top Products</p>
            </div>
            <div className="row ml-5 mb-4 mt-4">
              <span class="col-3 border rounded text-center d-flex align-items-center justify-content-center bg-primary" style={{height: 70}}>Settings</span>
              <span class="col-3 border rounded text-center d-flex align-items-center justify-content-center ml-2">Code</span>
              <span class="col-3 border rounded text-center d-flex align-items-center justify-content-center ml-2">Design</span>
            </div>
            <div className="row m-1">
              <p className="col-4" style={{fontSize: 15}}>HTML 5 Templates</p>
              <p className="col-3" style={{fontSize: 15}}>+25%</p>
              <div class="progress col-4">
  <div class="progress-bar bg-success" role="progressbar" style={{width: "25%",}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
            <div className="row m-1">
              <p className="col-4" style={{fontSize: 15}}>CSS 3</p>
              <p className="col-3" style={{fontSize: 15}}>+50%</p>
              <div class="progress col-4">
  <div class="progress-bar bg-primary" role="progressbar" style={{width: "50%",}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
            <div className="row m-1">
              <p className="col-4" style={{fontSize: 15}}>Express JS</p>
              <p className="col-3" style={{fontSize: 15}}>+75%</p>
              <div class="progress col-4">
  <div class="progress-bar bg-danger" role="progressbar" style={{width: "75%",}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
            <div className="row m-1">
              <p className="col-4" style={{fontSize: 15}}>Wordpress Themes</p>
              <p className="col-3" style={{fontSize: 15}}>+30%</p>
              <div class="progress col-4">
  <div class="progress-bar bg-warning" role="progressbar" style={{width: "30%",}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
            <div className="row m-1">
              <p className="col-4" style={{fontSize: 15}}>UI/UX Design</p>
              <p className="col-3" style={{fontSize: 15}}>+42%</p>
              <div class="progress col-4">
  <div class="progress-bar bg-dark" role="progressbar" style={{width: "42%",}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
