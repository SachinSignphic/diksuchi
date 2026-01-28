import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./About.css";
import AboutSlider from "../AboutSlider/AboutSlider";
import Footer from "../Footer/Footer";
import { sliderData1, sliderData2 } from "../AboutSlider/sliderData";
const About = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTalkToUs = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "our-studio" } });
    } else {
      const section = document.getElementById("our-studio");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return(
    <>
      <div className="about-head">
        <div className="about-top">
          <div className="top-left">
            <img
              src="left-arrow.png"
              alt="Back"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/");
                  window.scrollTo({ top: 0 });
                }
              }}
            />
            <h1>ABOUT US</h1>
          </div>
          <p className="top-right">Crafting the future<br/>of Architecture.</p>
        </div>
        <div className="about-bottom">
          <p className="bottom-left">About Diksuchi Founded in 2018, Diksuchi is an architectural firm that takes its name from the word compass a symbol of direction and purpose. Just like a compass guides the way, Diksuchi helps clients navigate the journey of designing and building thoughtful spaces.</p>
          <h3>
            On the market
            <br />
            since 201<span>8</span>
          </h3>
        </div>
      </div>
      <div className="about-mid">
        <div className="mid-head">
          <h1>Why we choose diksuchi ?</h1>
          <div
            className="about-nav-right"
            onClick={handleTalkToUs}
            style={{ cursor: "pointer" }}
          >
            <p>Contact</p>
            <div className="diag-arrow">
              <img src="/clarity_arrow-line.png" alt="Arrow" />
            </div>
            <div className="about-underline"></div>
          </div>
        </div>
        <div className="mid-content1">
          <div className="mid-items">
            <img src="aboutus6.png" />
            <p>Beutiful yet <br/><span>affordable</span> interiors.</p>
          </div>
          <div className="mid-items">
            <img src="aboutus5.png" />
            <p>Dedicated team of <br/><span>designers.</span></p>
          </div>
          <div className="mid-items">
            <img src="aboutus4.png" />
            <p><span>All services</span> under <br/>one roof.</p>
          </div>
          <div className="mid-items">
            <img src="aboutus3.png" />
            <p>No <span>hidden costs.</span></p>
          </div>
        </div>
        <div className="mid-content2">
          <div className="mid-items">
            <img src="aboutus2.png" />
            <p><span>Timely</span> delivery.</p>
          </div>
          <div className="mid-items">
            <img src="aboutus7.png" />
            <p><span>Quality checks</span> on <br/> every steps.</p>
          </div>
          <div className="mid-items">
            <img src="aboutus1.png" />
            <p>Regular project <br/> <span>updates</span> & <span>tracking.</span></p>
          </div>
        </div>
      </div>
      <AboutSlider
        title="Architecture Design Process"
        data={sliderData1}
      />
      <AboutSlider
        title="Interior Design Process"
        data={sliderData2}
      />
      <Footer />
    </>
  )
}

export default About;