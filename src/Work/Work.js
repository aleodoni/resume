import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
  render() {
    const tags = (jobEntry) => {
        return (
            jobEntry.tags.map((entry, i) => (
                <div className="chip" key={i}>{entry}</div>
            ))
        );
    }

    const responsabilities = (jobRespo) => {
        return (
            jobRespo.map((entry, i) => (
                <p key={i}>{entry}</p>
            ))
        );
    }

    const paragraphs = (jobDescription) => {
        return (
            jobDescription.split('\n').map((entry, i) => (
                <p key={i}>{entry}</p>
            ))
        );   
    }

    const jobs = this.props.data.map((entry, i) => (
        <div key={i} className="custom-content-wrapper">
            <h3>{entry.title}</h3>
            <h3><span>{entry.company}, {entry.location}</span></h3>
            <span>{entry.period}</span>
            {paragraphs(entry.description)}
            <h3><span>Responsabilities</span></h3>
            {responsabilities(entry.responsabilities)}
            {tags(entry)}
        </div>
    ));

    return (
        <div className="section-wrapper z-depth-1">                            
            <div className="section-icon col s12 m12 l2">
                <i className="fa fa-suitcase"></i>
            </div>
            <div className="custom-content col s12 m12 l10">
                <h2>Work Experience</h2>
                {jobs}
            </div>                            
        </div>
    );
  }
}

export default Work;
