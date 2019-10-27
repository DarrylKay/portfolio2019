import React, { Component } from "react";
import "./Projects.scss";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import NxtHeaderImage from "../../assets/nxt-header-image.jpg";
import NxtResImage from "../../assets/nxt-project.jpg";
import JniksHeaderImage from "../../assets/jniks-header-image.jpg";
import JniksResImage from "../../assets/jniks-project.jpg";
import BullandcoHeaderImage from "../../assets/bullandco-header-image.jpg";
import BullandcoResImage from "../../assets/bullandco-project.jpg";
import CitybreaksHeaderImage from "../../assets/city-breaks-header-image.jpg";
import CitybreaksResImage from "../../assets/city-breaks-project.jpg";
import { TweenMax, Power3 } from "gsap";

export class Projects extends Component {
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
      <div id="projects">
        <div className="nav-section">
          <Nav
            title="Projects"
            description="Here is a few projects that I have built. Just hover over a section and then select an action."
          />
        </div>
        <div className="main-section">
          <div className="first-column" ref={el => (this.firstColumn = el)}>
            <div className="image-box-nxt">
              <div className="project-info">
                <h1>NXT Online Store</h1>
                <Link
                  className="button"
                  to={{
                    pathname: "/projectdetails",
                    state: {
                      headerImage: NxtHeaderImage,
                      siteUrl: "http://nxt-co-uk.stackstaging.com/",
                      siteCode: "https://github.com/DarrylKay/nxt",
                      about:
                        "NXT is an online home and clothing retail store. Based on  one of the UK's leading retailers, Next, I decided to re-build and re-design the website. I took to dribbble.com for inspiration and used a design as a basis for the project. For the products I built a local database in a JS file that was populated with data I inputted from next.co.uk. ",
                      tech: [
                        "HTML5",
                        "CSS3",
                        "SASS",
                        "JavaScript",
                        "JSX",
                        "React",
                        "Redux",
                        "GSAP"
                      ],
                      challenges:
                        "This was the biggest project I have taken on. I initially tried building the project just using React, but the state tree quickly became too complicated. Building the database also became quite time consuming. There were smaller challenges I faced with making sure everything displayed correctly.",
                      resolution:
                        "To resolve these issues I used online forums and tutorials to help me out. I used a Redux as the state management tool, which made connecting to the state so much easier. I spent a whole night building the database until the late hours of the morning. If I was to build this project again I would like to build a database with MySQL and a backend with PHP. I enjoyed building NXT as it gave me the opportunity to use frameworks I hadn't used before.",
                      responsiveImage: NxtResImage
                    }
                  }}
                >
                  Details
                </Link>
                <a className="button" href="http://nxt-co-uk.stackstaging.com/">
                  Visit Site
                </a>
                <a className="button" href="https://github.com/DarrylKay/nxt">
                  View Code
                </a>
              </div>
            </div>
            <div className="image-box-jniks">
              <div className="project-info">
                <h1>J'nik's Events Catering</h1>
                <Link
                  className="button"
                  to={{
                    pathname: "/projectdetails",
                    state: {
                      headerImage: JniksHeaderImage,
                      siteUrl: "https://www.jniks.co.uk/",
                      siteCode: "https://github.com/DarrylKay/Jniks",
                      about:
                        "J'nik's is an events catering company based in Northamptonshire. I was approached by the two founders, Jason and Nick, to build a start-up landing page where they could promote themselves and their services. What initially started as a one of freelance project has now become a regular job. As the business has developed since its birth, we are currently re-designing the site to coincide with its aims and objectives. ",
                      tech: [
                        "HTML5",
                        "CSS3",
                        "SASS",
                        "JavaScript",
                        "JSX",
                        "React",
                        "React Animations",
                        "Email.js"
                      ],
                      challenges:
                        "As this was my first client based project I came across a number of challenges. Interacting with the clients to ensure I received all image and text content could be difficult at some points. Another challenge was to ensure they were happy with the design of the site throughout development. ",
                      resolution:
                        "Regular client meetings resolved a lot of the challenges that I had. Keeping the client informed along the development process helped me build up trust and strengthened our professional relationship. I currently work for them fixing any bugs that occur. We are also re-designing the website to promote the business in the direction it is taking itself in.",
                      responsiveImage: JniksResImage
                    }
                  }}
                >
                  Details
                </Link>
                <a className="button" href="https://www.jniks.co.uk/">
                  Visit Site
                </a>
                <a className="button" href="https://github.com/DarrylKay/Jniks">
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="second-column" ref={el => (this.secondColumn = el)}>
            <div className="image-box-bullandco">
              <div className="project-info">
                <h1>Bull & Co Barbershop</h1>
                <Link
                  className="button"
                  to={{
                    pathname: "/projectdetails",
                    state: {
                      headerImage: BullandcoHeaderImage,
                      siteUrl:
                        "http://bullandcobarbershop-co-uk.stackstaging.com/",
                      siteCode: "https://github.com/DarrylKay/Bull-Co",
                      about:
                        "Bull & Co barbershop was a project to help improve my JavaScript ES6 skills. Taking a simple yet effective design and creating it without any frameworks helped me to strengthen my knowledge. The design for this website was derived from a PSD file found on dribbble.com.",
                      tech: ["HTML5", "CSS3", "JavaScript"],
                      challenges:
                        "The challenges in this project were minor but could have a big effect on the output of the website. Having developed a lot using JSX, I kept reverting back to that syntax which would break the site. Giving the design life and animation (all be it a small amount) without using any libraries gave me a nice challenge.",
                      resolution:
                        "The syntax issues were a quick fix, just making sure to remember the right syntax is something that was highlighted to me. For the animation I used CSS and its transform property. A lot can be accomplished just using the basic web stack, which in the current era of frameworks and libraries, gets overlooked.",
                      responsiveImage: BullandcoResImage
                    }
                  }}
                >
                  Details
                </Link>
                <a
                  className="button"
                  href="http://bullandcobarbershop-co-uk.stackstaging.com/"
                >
                  Visit Site
                </a>
                <a
                  className="button"
                  href="https://github.com/DarrylKay/Bull-Co"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="image-box-citybreaks">
              <div className="project-info">
                <h1>City-Breaks Hotel</h1>
                <Link
                  className="button"
                  to={{
                    pathname: "/projectdetails",
                    state: {
                      headerImage: CitybreaksHeaderImage,
                      siteUrl: "http://city-life-co-uk.stackstaging.com/",
                      siteCode: "https://github.com/DarrylKay/city-life",
                      about:
                        "City Breaks is a hotel website focusing on big city escapes. This was a project built with React to improve my skills. This project was a lot of fun as it gave me an opportunity to build features that I hadn't done before. This was a personal project so some features were not included on the site that I would have added otherwise. ",
                      tech: [
                        "HTML5",
                        "CSS3",
                        "SASS",
                        "JavaScript",
                        "JSX",
                        "React",
                        "Contentful API"
                      ],
                      challenges:
                        "This whole project was a challenge as I wanted to build something that I hadn’t done before. As this has a filter system to show a customer’s requirements, maintaining the state throughout this project became difficult. Storing all the room data was also an issue I ran into.",
                      resolution:
                        "I took inspiration from online videos and tutorials to help me through parts of this project that I didn't understand or have the knowledge of. It also gave me to opportunity to use Reacts context API for the state management. With regards to the database, I used contentful.com which made building the database a lot easier. I feel this is a great technology to use as if a customer would want to add products to the database they can do so without the need to touch any code.",
                      responsiveImage: CitybreaksResImage
                    }
                  }}
                >
                  Details
                </Link>
                <a
                  className="button"
                  href="http://city-life-co-uk.stackstaging.com/"
                >
                  Visit Site
                </a>
                <a
                  className="button"
                  href="https://github.com/DarrylKay/city-life"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
