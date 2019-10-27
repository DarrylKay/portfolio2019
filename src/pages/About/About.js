import React, { Component } from "react";
import "./About.scss";
import Nav from "../../components/Nav/Nav";
import AboutPic from "../../assets/about-picture.jpg";
import AboutSkills from "../../assets/about-skills.jpg";
import { TweenMax, Power3 } from "gsap";

export class About extends Component {
  constructor(props) {
    super(props);

    this.firstColumn = null;
    this.secondColumn = null;
  }

  componentDidMount() {
    TweenMax.from(this.firstColumn, 3, {
      opacity: 0,
      y: -500,
      ease: Power3.easeOut
    });
    TweenMax.from(this.secondColumn, 3, {
      opacity: 0,
      y: 500,
      ease: Power3.easeOut
    });
  }

  render() {
    return (
      <div id="about">
        <div className="nav-section">
          <Nav
            title="About"
            description="A little information about me. In and out of work as well as a list of technologies that i currently know."
          />
        </div>
        <div className="main-section">
          <div className="first-column" ref={el => (this.firstColumn = el)}>
            <div className="image-box">
              <img
                src={AboutPic}
                alt="Darryl Kay Front End Web Developer About"
                className="about-pic"
              />
            </div>
            <div className="text-box">
              <div className="text">
                <h2>work</h2>
                <p>
                  Web development has transformed from a spark of interest to an
                  all-out passion and an area that I want to master. Being a
                  developer has given me the ability to craft digital products
                  that not only look cool and interesting but that can be moved
                  and interacted with. Enabling me to bring great designs to
                  life. I'm looking for a happy work environment with peers who
                  are as passionate and ambitious as I am.
                </p>
              </div>
            </div>
          </div>
          <div className="second-column" ref={el => (this.secondColumn = el)}>
            <div className="text-box">
              <div className="text">
                <h2>Play</h2>
                <p>
                  Outside of development I enjoy spending time with family and
                  friends. I enjoy dining out and sampling different and
                  interesting foods. I also have a drive for self-development,
                  I’m always looking to improve my weak areas. One of my
                  favourite sayings is "if I’m the smartest guy in the room, I’m
                  in the wrong room".
                </p>
              </div>
            </div>
            <div className="image-box">
              <img
                src={AboutSkills}
                alt="Darryl Kay Front End Web Developer skills"
                className="skills-pic"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
