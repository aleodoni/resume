import React, { Component } from "react";
import About from "./About";
import Education from "./Education";
import Work from "./Work";
import Other from "./Other";
import Courses from "./Courses";

import data from "./data/data.json";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="row">
        <About data={data.about} />
        <section className="col s12 m12 l8 section">
          <div className="row">
            <Work data={data.work} />
            <Education data={data.education} />
            <Courses data={data.courses} />
            <Other data={data.other} />
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
