import React, { Component } from "react";
import "./About.css";

import foto from "../foto.jpg";

class About extends Component {
  render() {
    return (
      <aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
        <div className="row">
          <div className="col l12 m12 s12 sort-info sidebar-item">
            <div className="row">
              <div className="col m12 s12 l3 icon">
                <i className="fa fa-user" />
              </div>
              <div className="col m12 s12 l9 info a1 ">
                <div className="section-item-details">
                  <div className="personal">
                    <h1>
                      <div>{this.props.data.name} </div>
                    </h1>
                    <img
                      class="materialboxed"
                      width="280"
                      src={foto}
                      alt="foto"
                    />
                    <h4>{this.props.data.ocupation}</h4>
                    <span>{this.props.data.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l12 m12 s12 mobile sidebar-item">
            <div className="row">
              <div className="col m12 s12 l3 icon">
                <i className="fa fa-map-marker" />
              </div>
              <div className="col m12 s12 l9 info a2 ">
                <div className="section-item-details">
                  <div className="personal">
                    <h4>
                      <a href={this.props.data.location.link}>
                        {this.props.data.location.place}
                      </a>
                    </h4>
                    <span>
                      {this.props.data.location.relocationAvailability}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l12 m12 s12 email sidebar-item ">
            <div className="row">
              <div className="col m12 s12 l3 icon">
                <i className="fa fa-envelope" />
              </div>
              <div className="col m12 s12 l9 info a3 ">
                <div className="section-item-details">
                  <div className="personal">
                    <h4>
                      <a href={this.props.data.email.address}>
                        {this.props.data.email.label}
                      </a>
                    </h4>
                    <span>{this.props.data.email.type}</span> <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l12 m12 s12 address sidebar-item ">
            <div className="row">
              <div className="col l3 m12  s12 icon">
                <i className="fa fa-linkedin" />
              </div>
              <div className="col m12 s12 l9 info a4 ">
                <div className="section-item-details">
                  <div className="personal">
                    <h4>
                      <a href={this.props.data.linkedin.address}>
                        {this.props.data.linkedin.label}
                      </a>
                    </h4>
                    <span>
                      <a href={this.props.data.linkedin.address}>
                        {this.props.data.linkedin.address}
                      </a>
                    </span>{" "}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l12 m12 s12 address sidebar-item ">
            <div className="row">
              <div className="col l3 m12  s12 icon">
                <i className="fa fa-github" />
              </div>
              <div className="col m12 s12 l9 info a4 ">
                <div className="section-item-details">
                  <div className="personal">
                    <h4>
                      <a href={this.props.data.github.address}>
                        {this.props.data.github.label}
                      </a>
                    </h4>
                    <span>
                      <a href={this.props.data.github.address}>
                        {this.props.data.github.address}
                      </a>
                    </span>{" "}
                    <br />
                    <span>
                      <a
                        href={this.props.data.github.thisRepo}
                        style={{ fontSize: "11px" }}
                      >
                        (repo of this page)
                      </a>
                    </span>{" "}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default About;
