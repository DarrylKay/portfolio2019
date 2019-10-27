import React, { Component } from "react";
import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import ProfilePic from "../../assets/profile-picture.jpg";
import HomeImage from "../../assets/home-image-2.jpg";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

export class Home extends Component {
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
      <div id="home">
        <div className="nav-section">
          <Nav
            title="Darryl"
            description="Hi I'm Darryl Kay, a front end web developer based in northamptonshire. My passion is taking beautiful website designs and bringing them to life."
          />
        </div>
        <div className="main-section">
          <div className="first-column" ref={el => (this.firstColumn = el)}>
            <div className="image-box" >
              <img
                src={ProfilePic}
                alt="Darryl Kay Front End Web Developer Profile"
                className="profile-pic"
              />
            </div>
            <div className="text-box">
              <div className="text">
                <h2>Work with me</h2>
                <p>
                  If you like what you see then get in touch, I'd love to hear
                  from you
                </p>
                <Link to="/contact" className="link">
                  contact me
                </Link>
              </div>
            </div>
          </div>
          <div className="second-column" ref={el => (this.secondColumn = el)}>
            <div className="text-box" >
              <div className="text">
                <h2>browse the goods</h2>
                <p>
                  A collection of projects that help demonstrate my skills and
                  abillities as a front end Developer.
                </p>
                <Link to="/projects" className="link">
                  lets see then!
                </Link>
              </div>
            </div>
            <div className="image-box" >
              <img
                src={HomeImage}
                alt="Darryl Kay Front End Web Developer Profile"
                className="profile-pic"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
