import React from "react";
import "./index.scss";
import paintBrush from "./brush-paint.png";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="about-head">
            <Fade direction="left">
              <h2>About Me</h2>
            </Fade>
          </div>
        </div>
        <div className="col-6">
          <div className="about-content">
            <img
              className="content-img parallax-layer"
              data-speed="2"
              src={paintBrush}
              alt="brush-paint"
            />
            <Fade delay={500}>
              <div
                className="about-content-detail parallax-layer"
                data-speed="2"
              >
                <p>
                  {" "}
                  <span>M</span>y name is Ahmet, and I am 21 years old. In 2022,
                  I graduated as a Web & Application developer. Junior developer
                  with a lot of experience in structuring, developing, and
                  implementing interactive websites.
                  <br />
                  <br />
                  <span>I</span> work hard on websites to build responsive and
                  hassle-free. Being innovative with technology and SEO so that
                  the website is found more often. Able to handle projects
                  efficiently and satisfy customers with beautiful,
                  user-friendly websites.
                </p>{" "}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
