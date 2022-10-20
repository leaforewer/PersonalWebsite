import React from "react";
import "./index.scss";
import { Fade } from "react-awesome-reveal";
import GalacticoreLogo from "./logo.png";
import GtaLogo from "./gta-logo.png";

function Contact() {
  return (
    <div>
      <div className="container">
        <Fade>
          <div className="experience-head">
            <h2>Recent Works</h2>
            <div className="d-flex justify-content-center align-items-center">
              {"< "}&nbsp; <hr /> &nbsp;{"/>"}
            </div>
          </div>
        </Fade>
        <div className="exp-group">
          <div className="row">
            <Fade className="col-xl-5 col-lg-12 mx-lg-auto" direction="left" delay={300}>
              <div className="d-flex ae">
                <a
                  className="h-100"
                  rel="noreferrer"
                  target="_blank"
                  href="https://galacticore-nft.com/"
                >
                  <img src={GalacticoreLogo} alt="Galacticore Logo" />
                </a>
                <div className="px-3 py-3 py-lg-5">
                  <h3>Galacticore</h3>
                  <p>
                    Galacticore aims to start as a NFT project and continue as a
                    P2E game project after successful launch of the game. Main
                    idea behind the game is making the game “fun-to-play”
                    instead of just playing for earning. To build a community we
                    decided to share 100% of the royalty shares.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade className="col-xl-5 col-lg-12 mx-lg-auto" direction="right" delay={300}>
              <div className="d-flex ae rr">
                <a
                  className="h-100"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.goedkoopste-telefoonabonnement.nl/"
                >
                  <img src={GtaLogo} alt="GTA Logo" />
                </a>
                <div className="px-3 py-3 py-lg-5">
                  <h3>Goedkoopste Telefoon Abonnementen</h3>
                  <p>
                    Goedkoopste-telefoonabonnement.nl will find the cheapest
                    subscription for you. It does not matter which requirements
                    the subscription must meet, we will find the cheapest
                    subscription for you.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="card-row-banner">
        <div className="container">
          <div className="row">
            <Fade className="col-lg-3 col-md-12 px-md-0 px-lg-4" delay={200}>
              <div className="outer-card">
                <div className="inner-card">
                  <h3>
                    <i className="bx bx-code-alt"></i> Beautiful Code
                  </h3>
                  <p>
                    I write clean, semantic, organized, and valid markup that
                    eliminates excess code and allows others to easily
                    understand and therfore update content in the future.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade className="col-lg-3 col-md-12 px-md-0 px-lg-4" delay={400}>
              <div className="outer-card">
                <div className="inner-card">
                  <h3>
                    <i className="bx bxs-rocket"></i> Fast
                  </h3>
                  <p>
                    I build fast and efficient web sites. Fast websites always
                    attract more visitors, and those visitors are more likely to
                    choose you over the competition. In addition, website speed
                    is essential for{" "}
                    <abbr title="Search Engine Optimization">SEO</abbr> &mdash;{" "}
                    <a href="http://moz.com/blog/how-website-speed-actually-impacts-search-ranking">
                      faster websites rank higher
                    </a>
                    .
                  </p>
                </div>
              </div>
            </Fade>
            <Fade className="col-lg-3 col-md-12 px-md-0 px-lg-4" delay={600}>
              <div className="outer-card">
                <div className="inner-card">
                  <h3>
                    <i className="bx bxs-crop"></i> Responsive
                  </h3>
                  <p>
                    Responsive web design means that your website will work on
                    any screen size, from desktops to mobile phones alike.
                    Having a website that works well across all devices and
                    screen sizes means your website has a broader reach,
                    appealing to more visitors.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade className="col-lg-3 col-md-12 px-md-0 px-lg-4" delay={800}>
              <div className="outer-card">
                <div className="inner-card">
                  <h3>
                    <i className="bx bxs-check-shield"></i> Powerful
                  </h3>
                  <p>
                    From a static single page website to a full fledged database
                    driven web app, I build websites that give your organization
                    the potential to succeed.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
