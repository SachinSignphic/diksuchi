import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomePage.css";
import OurWorksCard from "../OurWorksCard/OurWorksCard";
import PublicationsCard from "../PublicationsCard/PublicationsCard";
import OurStudio from "../OurStudio/OurStudio";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === "our-studio") {
      setTimeout(() => {
        const section = document.getElementById("our-studio");
        section?.scrollIntoView({ behavior: "smooth" });

        navigate("/", { replace: true, state: null });
      }, 150);
    }
  }, [location, navigate]);
  return (
      <>
      <div className="home">
        <div className="home-logo"></div>
        <img src="Frame 72.png" className="home-image"/>
      </div>
      <div className="about-us">
        <div className="top">
          <h1 className="title">
            CRAFTING THE FUTURE
            <br />
            OF ARCHITECTURE.
          </h1>
          <Link to="/about">
            <div className="link">
              <p>
                <u>About us</u>
              </p>
              <img src="/diag-arrow.png" />
            </div>
          </Link>
        </div>
        <div className="middle">
          <h3>
            On the market
            <br />
            since 201<span>8</span>
          </h3>
          <p className="para">
            About Diksuchi Founded in 201<span>8</span>, Diksuchi is an
            architectural firm that takes its name from the word compass a
            symbol of direction and purpose. Just like a compass guides the way,
            Diksuchi helps clients navigate the journey of designing and
            building thoughtful spaces.
          </p>
        </div>
        <div className="bottom">
          <h1 className="title">MEET MRUDULA INDUR,</h1>
          <div className="info">
            <img className="owner" src="/owner.png" />
            <div className="socials">
              <Link to="https://www.instagram.com/diksuchidesignstudio/">
                <img src="/instagram.png" />
              </Link>
              <Link to="https://www.linkedin.com/company/diksuchidesignstudio/">
                <img src="/linkedin.png" />
              </Link>
            </div>
            <p className="para">
              The creative force behind Diksuchi, a Hyderabad based
              architectural firm founded in 2018. With a deep rooted passion for
              design and a strong commitment to sustainable architecture,
              Mrudula brings a perfect blend of creativity, functionality, and
              environmental consciousness to every project.{" "}
            </p>
            <p className="para">
              Her architectural journey began with a B. Arch from CSIIT,
              followed by a Master's in Sustainable Architecture from Bharati
              Vidyapeeth, Pune. This educational foundation, paired with years
              of hands on experience.
            </p>
          </div>
        </div>
      </div>
      <div className="our-works">
        <div className="top">
          <h1 className="title">
            EXPLORE OUR JOURNEY OF
            <br />
            DESIGN & INNOVATION.
          </h1>
          <Link to="/works">
            <div className="link">
              <p>
                <u>Our works</u>
              </p>
              <img src="/diag-arrow.png" />
            </div>
          </Link>
        </div>
        <div className="cards">
          <OurWorksCard imgSrc="/ourworks/OurWorks2.png" title="Mokila FarmHouse"/>
          <OurWorksCard imgSrc="/ourworks/OurWorks13.png" title="Dr.Revant's Hair Clinic"/>
          <OurWorksCard imgSrc="/ourworks/OurWorks7.png" title="Azad Engineering Ltd"/>
        </div>
      </div>
      <div className="publications">
        <div className="top">
          <h1 className="title">
            PUBLICATIONS
          </h1>
          <Link to="/publications">
            <div className="link">
              <p>
                <u>Publications</u>
              </p>
              <img src="/diag-arrow.png" />
            </div>
          </Link>
        </div>
        <div className="cards">
          <PublicationsCard imgsrc="" title="Name"/>
          <PublicationsCard imgsrc="" title="Name"/>
          <PublicationsCard imgsrc="" title="Name"/>
          <PublicationsCard imgsrc="" title="Name"/>
        </div>
      </div>
      <div id="our-studio" className="our-studio">
        <OurStudio />
      </div>
      <Footer/>
      </>
  );
};

export default HomePage;
