import React, { Component } from "react";
import moment from "moment";
import "./Home.css";

export class Experience extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row col-12">
          <h1>Experience</h1>
        </div>

        <div className="row">
          <div className="col-6">
            <h2>GITHUB CAMPUS EXPERT</h2>
            <h3>GITHUB</h3>
          </div>
          <div className="col-6">
            {moment("Tuesday, 9 February 2020").format("MMMM YYYY")} -{" "}
            {moment().format("ll")}
          </div>
        </div>

        <div className="row">
          <p>
            Responsible for building the campus community with the support of
            Github.
          </p>
        </div>

        <div className="row">
          <h2>OPENSOURCE DEVELOPER INTERN</h2>
        </div>
        <div className="row">
          <h3>FOSSASIA</h3>
        </div>

        <div className="row">
          <p>
            Contributing to Fossasia’s open event server and frontend as an
            intern.Resolved numerous bug and added new feature to the eventyay
            platform.
          </p>
        </div>
      </div>
    );
  }
}

export default Experience;
