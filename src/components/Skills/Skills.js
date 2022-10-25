import React from "react";
import "./index.scss";
import { Fade } from "react-awesome-reveal";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Fade direction="left">
              <div className="skill-head">
                Skills & <br />
                Experience
              </div>
            </Fade>
            <Fade direction="left" delay={500}>
              <div className="skill-parag">
                I create successful responsive websites that are fast, easy to
                use, and built with best practices. The main area of my
                expertise is front-end development, HTML, CSS, JS, building
                small and medium web apps, custom plugins, features, animations,
                and coding interactive layouts.
                <br />
                <br />
                Couple of months ago, me and my friend started up a NFT project.
                The reason is that we think that in the future the anonymous
                will be an important aspect of the internet, and so we tried to
                make our own. I finished developing the website for Galacticore.
                You can take a look at{" "}
                <a href="https://galacticore-nft.com/"> here</a>.
                <br />
                <br />
                Visit my <a href="https://www.linkedin.com/in/ahmet-erd/">LinkedIn</a> profile for more details or
                just <a href="#home">contact</a> me.
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="skill-content">
              <Fade delay={500}>
                <ul>
                  <li>
                    <h5>
                      Front-End
                      <span>
                        {" "}
                        (Html, Css (Sass), Javascript, Responsive, SEO)
                      </span>
                    </h5>
                    <div className="progress-bar bar-1"></div>
                  </li>
                  <li>
                    <h5>
                      Back-end<span> (Php, MySQL, Javascript, JSON)</span>
                    </h5>
                    <div className="progress-bar bar-2"></div>
                  </li>
                  <li>
                    <h5>Databases Relations</h5>
                    <div className="progress-bar bar-3"></div>
                  </li>
                  <li>
                    <h5>React JS</h5>
                    <div className="progress-bar bar-4"></div>
                  </li>
                  <li>
                    <h5>Vue Js</h5>
                    <div className="progress-bar bar-5"></div>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
          <Fade delay={500} direction="up">
            <div className="morearrow-down">
              <a href="#experience" className="arrow-wrap">
                <i className="bx bx-down-arrow-alt"></i>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contact;
