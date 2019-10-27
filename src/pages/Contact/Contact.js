import React, { Component } from "react";
import "./Contact.scss";
import Nav from "../../components/Nav/Nav";
import { TweenMax, Power3 } from "gsap";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.firstLine = null;
    this.secondLine = null;
    this.thirdLine = null;
  }

  componentDidMount() {
    TweenMax.from(this.firstLine, 2, {
      opacity: 0,
      x: 300,
      ease: Power3.easeOut
    });
    TweenMax.from(this.secondLine, 2.5, {
      opacity: 0,
      x: 300,
      ease: Power3.easeOut,
      delay: 0.3
    });
    TweenMax.from(this.thirdLine, 3, {
      opacity: 0,
      x: 300,
      ease: Power3.easeOut,
      delay: 0.6
    });
  }
  render() {
    return (
      <div id="contact">
        <div className="nav-section">
          <Nav
            title="Contact"
            description="I hope you have enjoyed my work. Here is the best way to cantact me. I will reply ASAP."
          />
        </div>
        <div className="main-section">
          <h1 ref={el => (this.firstLine = el)}>
            Thanks For showing an interest
          </h1>
          <h3 ref={el => (this.secondLine = el)}>
            Drop me an email to the address below to discuss how I can help you.
            I look forward to us working together.
          </h3>
          <p ref={el => (this.thirdLine = el)}>kay_darryl@hotmail.com</p>
        </div>
      </div>
    );
  }
}

export default Contact;
