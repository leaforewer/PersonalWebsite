import React from "react";
import "./index.scss";

function About() {
  return (
    <div className="footer-group">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <footer>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-5">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-muted">
                © 2022 Leaforewer, v1.0
              </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a href="https://www.linkedin.com/in/ahmet-erd/">
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://github.com/leaforewer">
                  <i className="bx bxl-github"></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="mailto: leaforewer.net@gmail.com">
                  <i className="bx bxl-gmail"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
