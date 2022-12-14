import React from "react";
import { useState } from "react";
import Typical from "react-typical";
import { Fade } from "react-awesome-reveal";
import "@lottiefiles/lottie-player";
import "./index.scss";
// Components
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Skills/Experience";

function Home() {
  const [isFormActive, setFormActive] = useState("false");

  const handleFormToggle = () => {
    setFormActive(!isFormActive);
  };

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [isFeedActive, setFeedActive] = useState("false");

  const handleFeedToggle = () => {
    setFeedActive(!isFeedActive);
  };
  return (
    <div id="main">
      <div className={isFormActive ? "" : "main-content-blur-content"}>
        <nav className="navbar main-nav fixed-top">
          <div className="container">
            <a className="navbar-head" href="#home">
              <h1>
                <div>A</div>
                <div>C</div>
                <div>E</div>
              </h1>
            </a>
            <div className="nav-slider ms-auto">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skill">
                    Skills & Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/collections">
                    Collections
                  </a>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={handleFormToggle}>
                    Contact
                  </div>
                </li>
              </ul>
            </div>
            {/* Mobile Nav Menu  Activated when scrolling*/}

            <div className={isActive ? "" : "menu-opened"}>
              <div className="header">
                <div className="burger-container" onClick={handleToggle}>
                  <div id="burger">
                    <div class="bar topBar"></div>
                    <div class="bar btmBar"></div>
                  </div>
                </div>
                <ul className="menu">
                  <Fade delay={600}>
                    <li className="menu-item">
                      <a onClick={handleToggle} href="#about">
                        About
                      </a>
                    </li>
                  </Fade>
                  <Fade delay={700}>
                    <li className="menu-item">
                      <a onClick={handleToggle} href="#skill">
                        Skill & Experience
                      </a>
                    </li>
                  </Fade>
                  <Fade delay={800}>
                    <li className="menu-item">
                      <a onClick={handleToggle} href="/collections">
                        Collections
                      </a>
                    </li>
                  </Fade>
                  <Fade delay={900}>
                    <li className="menu-item">
                      <div onClick={handleFormToggle}>Contact</div>
                    </li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div
          id="social-feed-container"
          className={isFeedActive ? "closeFeed" : "openFeed"}
        >
          <div className="social-feed-wrapper">
            {isFeedActive ? (
              <i
                className="bx bx-expand-horizontal"
                onClick={handleFeedToggle}
              ></i>
            ) : (
              <i className="bx bx-collapse-alt" onClick={handleFeedToggle}></i>
            )}
          </div>
          <div className="social-feed-group">
            <div className="social-feed-item">
              <a href="https://www.linkedin.com/in/ahmet-erd/">
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </div>
            <div className="social-feed-item">
              <a href="https://github.com/leaforewer">
                <i className="bx bxl-github"></i>
              </a>
            </div>
            <div className="social-feed-item">
              <a href="mailto:leaforewer.net@gmail.com?SUBJECT={Your%20Subject}%20[PWM]">
                <i className="bx bxl-gmail"></i>
              </a>
            </div>
          </div>
        </div>
        <section id="home">
          <div className="container-fluid hm">
            <div className="masthead">
              <div className="home-intro">
                <Fade delay={500}>
                  <div className="home-head">
                    <h2>
                      <div>Hey I'm, </div>
                      <div>Ahmet Erdo??an</div>
                      <br /> I'm a{" "}
                      <Typical
                        steps={[
                          "Front end Developer",
                          4000,
                          "Back end Developer",
                          4000,
                          "3d Modeller",
                          4000,
                          "Gamer",
                          4000,
                        ]}
                        loop={Infinity}
                        wrapper="span"
                      />
                    </h2>
                  </div>
                </Fade>
              </div>
              <div className="masthead-objects">
                <div className="canvas-frame">
                  <Fade delay={1000}>
                    <div className="frame"></div>
                  </Fade>
                </div>

                <canvas id="canvas3d"></canvas>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
      <div className={isFormActive ? "closeModalForm" : "openModalForm"}>
        <div className="form-modal-frame">
          <i className="bx bx-x" onClick={handleFormToggle}></i>
          <div className="modal-group">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-modal-head">
                  <h3>Let me know you're here!</h3>
                </div>
                <form>
                  <p>
                    <label htmlFor="title">Topic</label>
                    <br />
                    <input
                      placeholder="Enter your topic"
                      type="text"
                      id="title"
                      name="title"
                    />
                  </p>

                  <p>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input
                      placeholder="Enter your username"
                      type="text"
                      id="username"
                      name="username"
                    />
                  </p>

                  <p>
                    <label htmlFor="description">Your message</label>
                    <br />
                    <textarea
                      id="description"
                      name="content"
                      cols="50"
                      rows="6"
                    ></textarea>
                  </p>

                  <p align="center">
                    <input type="submit" id="submit" name="submit" />
                  </p>
                </form>
              </div>
              <div className="col-lg-6 col-md-12 ae">
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_ipd377dh.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
