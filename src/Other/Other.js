import React, { Component } from 'react';
import './Other.css';

class Other extends Component {
  render() {
    const other = this.props.data.map((entry, i) => (
        <p>{entry}</p>
    ));

    return (
        <div className="section-wrapper z-depth-1">
            <div className="section-icon col s12 m12 l2">
                <i className="fa fa-futbol-o"></i>
            </div>
            <div className="custom-content col s12 m12 l10">
                <h2>Other </h2>
                {other}
            </div>
        </div>
    );
  }
}

export default Other;
