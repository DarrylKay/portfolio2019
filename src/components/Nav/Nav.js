import React, { Component } from "react";
import "./Nav.scss";
import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.main = null;
    this.container = null;
    this.info = null;

    this.state = {
      menuOpen: false
    };
  }

  componentDidMount() {
    TweenMax.from(this.main, 0, { css: { visibility: "visible" } });
    TweenMax.from(this.info, 0, { css: { visibility: "visible" } });
    TweenMax.from(this.container, 3, {
      opacity: 0,
      x: -500,
      ease: Power3.easeOut
    });
  }

  handleMenuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    return (
      <div>
        <div id="main-nav" ref={el => (this.main = el)}>
          <div className="nav-container" ref={el => (this.info = el)}>
            <div className="nav-bar">
              <Link to="/" className="link">
                Projects
              </Link>
              <Link to="/about" className="link">
                About
              </Link>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </div>
            <div className="nav-info" ref={el => (this.container = el)}>
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
            <div className="nav-social">
              <a href="https://github.com/DarrylKay" className="link">
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/darryl-kay-72279318a/?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=uk"
                className="link"
              >
                <FaLinkedinIn className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div id="mobile-nav">
          <div className="mobile-nav-container">
            <div className="logo-container">
              <p className="logo">Darryl</p>
            </div>
            <div className="hamburger-container">
              <FaBars className="hamburger" onClick={this.handleMenuToggle} />
            </div>
          </div>
          <div
            className={
              this.state.menuOpen
                ? "mobile-links-container open"
                : "mobile-links-container"
            }
          >
            <Link to="/" className="link">
              Projects
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
