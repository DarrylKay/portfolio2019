import React, { Component } from "react";
import "./ProjectDetails.scss";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import { TweenMax, Power3 } from "gsap";

export class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.details = null;
    this.delayOne = null;
    this.delayTwo = null;
    
  }

  componentDidMount() {
    TweenMax.from(this.details, 2, {
      opacity: 0,
      y: 500,
      ease: Power3.easeOut
    });
    TweenMax.from(this.delayOne, 2, {
      opacity: 0,
      y: 500,
      ease: Power3.easeOut,
      delay: 1
    });
    TweenMax.from(this.delayTwo, 2, {
      opacity: 0,
      y: 500,
      ease: Power3.easeOut,
      delay: 2
    });
    
  }
  render() {
    return (
      <div id="details">
        <div className="nav">
          <Nav />
        </div>
        <div className='main' ref={el => (this.details = el)}>
          <div className="details-header" >
            <img
              src={this.props.location.state.headerImage}
              alt="Darryl Kay Front End Developer Project Details"
              className="header-image"
            />
            <div className="link-box" >
              <a href={`${this.props.location.state.siteUrl}`} className="link">
                Visit Site
              </a>
              <a
                href={`${this.props.location.state.siteCode}`}
                className="link"
              >
                View Code
              </a>
              <Link to="/projects" className="link">
                Back To Projects Page
              </Link>
            </div>
          </div>
          <div className="details-about-section" ref={el => (this.delayOne = el)}>
            <div className="about-box">
              <h2>About The Project</h2>
              <p className="about-description">
                {this.props.location.state.about}
              </p>
            </div>
            <div className="technologies-box">
              <h2>The Tech I Used</h2>
              <ul className="technologies-list">
                {this.props.location.state.tech.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>

            <div className="challenges-box">
              <h2>Challenges I faced</h2>
              <p className="challenges-description">
                {this.props.location.state.challenges}
              </p>
            </div>
            <div className="resolve-box">
              <h2>How I Resolved Them</h2>
              <p className="resolve-description">
                {this.props.location.state.resolution}
              </p>
            </div>
          </div>
          <div className="responsive-section" ref={el => (this.delayTwo = el)}>
            <div className="responsive-image">
              <img
                src={this.props.location.state.responsiveImage}
                alt="Darryl Kay Front End Developer Responsive Websites"
                className="image"
              />
            </div>
            <div className="responsive-info">
              <p>
                In today's tech driven world, websites are more in demand than
                ever before. Over the past 5 years responsive design and
                capability has become essential to all websites and
                applications. With that in mind all projects are built to be
                handled on any device while still maintaining a beautiful and
                easy to navigate design.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
