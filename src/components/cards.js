import React, { Component } from "react";
import {LocationIcon} from '@primer/octicons-react'
export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row m-0">
        <div
          style={{ width: 350, marginLeft: 5, marginTop: 0, marginRight: 5 }}
        >
          <div className="card h-100">
            <div className="row">
              <p className="col-6 m-2" style={{fontSize: 12, color: "#a6a6a6"}}>ANNOUNCEMENTS</p>
            </div>
            <div className="row">
              <p className="col-12 m-2">Incredibly Positive Reviews</p>
            </div>
            <div className="row">
              <p className="col-12 m-2" style={{ color: "#cccccc"}}>
                To start a blog, think about a topic which could very well suit
                your interests
              </p>
            </div>
            <div className="row">
              <p className="col-4 m-4 badge badge-primary p-2">19 Nov 2019</p>
              <p className="col-4 m-4 badge badge-light p-2">View</p>
            </div>
          </div>
        </div>
        <div
          style={{ width: 350, marginLeft: 5, marginTop: 0, marginRight: 5 }}
        >
          <div className="card h-100">
            <div className="row">
              <p className="col-5 m-2" style={{fontSize: 12, color: "#a6a6a6"}}>PROJECTS</p>
            </div>
            <div className="row">
              <p className="col-12 m-2">First Milestone Achievements</p>
            </div>
            <div className="row">
              <p className="col-12 m-2" style={{ color: "#cccccc"}}>
                To start a blog, think about a topic which could very well suit
                your interests
              </p>
            </div>
            <div className="row">
              <p className="col-4 m-2">
                Progress
              </p>
              <p className="col-2 m-2">
                
              </p>
              <p className="col-4 m-2">
                75%
              </p>
            </div>
            <div className="progress row m-2">
              <div
                className="progress-bar col-8"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: 350, marginLeft: 5, marginTop: 0, marginRight: 5 }}
        >
          <div className="card h-100">
            <div className="row">
              <p className="col-12 m-2" style={{fontSize: 12, color: "#a6a6a6"}}>TODAY'S SCHEDULE</p>
            </div>
            <div className="row">
              <p className="col-12 m-2">UI/UX Design Updates</p>
            </div>
            <div className="row">
              <p className="col-12 m-2 text-primary">11:15AM - 12:30PM</p>
            </div>
            <div className="row mt-4">
            <LocationIcon size={16} className="col-2 m-1" /><span className="ml-0">Lucknow,India</span>
            
            <p className="ml-5 mt-1 badge badge-light p-1">View Map</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
