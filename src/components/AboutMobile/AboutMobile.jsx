import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AboutMobile.css";
import AboutSlider from "../AboutSlider/AboutSlider";
import FooterMobile from "../FooterMobile/FooterMobile";
import { sliderData1, sliderData2 } from "../AboutSlider/sliderData";
const AboutMobile = () => {
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
      <div className="work-top-left-mob">
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
      <p className="top-right-mob">Crafting the future<br/>of Architecture.</p>
      <p className="bottom-left-mob">About Diksuchi Founded in 2018, Diksuchi is an architectural firm that takes its name from the word compass a symbol of direction and purpose. Just like a compass guides the way, Diksuchi helps clients navigate the journey of designing and building thoughtful spaces.</p>
      <div className="about-link-mob">
        <p>
          <u>Contact</u>
        </p>
        <img src="/diag-arrow.png" />
      </div>
      <h2 className="about-mob-title">Why we choose diksuchi ?</h2>
      <div className="about-mid-mob">
        <div className="about-mid-left-mob">
          <img src="aboutus6.png" />
          <p>Beutiful yet <br/><span>affordable</span> interiors.</p>
        </div>
        <img src="/right-vector.png" className="about-mid-vector-mob" />
      </div>
      <div className="about-mid-mob">
        <img src="/left-vector.png" className="about-mid-vector-mob" />
        <div className="about-mid-left-mob">
          <img src="aboutus5.png" />
          <p>Dedicated team of <br/><span>designers.</span></p>
        </div>
      </div>
      <div className="about-mid-mob">
        <div className="about-mid-left-mob">
          <img src="aboutus4.png" />
          <p><span>All services</span> under <br/>one roof.</p>
        </div>
        <img src="/right-vector.png" className="about-mid-vector-mob" />
      </div>
      <div className="about-mid-mob">
        <img src="/left-vector.png" className="about-mid-vector-mob" />
        <div className="about-mid-left-mob">
          <img src="aboutus3.png" />
          <p>No <span>hidden costs.</span></p>
        </div>
      </div>
      <div className="about-mid-mob">
        <div className="about-mid-left-mob">
          <img src="aboutus2.png" />
          <p><span>Timely</span> delivery.</p>
        </div>
        <img src="/right-vector.png" className="about-mid-vector-mob" />
      </div>
      <div className="about-mid-mob">
        <img src="/left-vector.png" className="about-mid-vector-mob" />
        <div className="about-mid-left-mob">
          <img src="aboutus7.png" />
          <p><span>Quality checks</span> on <br/> every steps.</p>
        </div>
      </div>
      <div className="about-mid-mob">
        <div className="about-mid-left-mob">
          <img src="aboutus1.png" />
          <p>Regular project <br/> <span>updates</span> & <span>tracking.</span></p>
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
      <FooterMobile />
    </>
  )
}

export default AboutMobile;