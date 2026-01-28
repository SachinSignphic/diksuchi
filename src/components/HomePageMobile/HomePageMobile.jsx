import React from "react";
import "./HomePageMobile.css";
import { Link } from "react-router-dom";
import OurWorksCard from "../OurWorksCard/OurWorksCard";
import PublicationsCard from "../PublicationsCard/PublicationsCard";
import OurStudioMobile from "../OurStudioMobile/OurStudioMobile";
import FooterMobile from "../FooterMobile/FooterMobile";
export default function HomePageMobile() {
  return (
    <>
      <div className="home-header-mob">
        <img src="/home-logo.png" className="home-logo-mob"/>
        <img src="/home-img-mob.png" className="home-img-mob"/>
      </div>
      <div className="home-middle-mob">
        <div className="about-us-mob">
          <Link to="/about">
            <div className="link-mob">
              <p>
                <u>About us</u>
              </p>
              <img src="/diag-arrow.png" />
            </div>
          </Link>
          <h1 className="title-mob">
            CRAFTING THE FUTURE
            <br />
            OF ARCHITECTURE.
          </h1>
          <p className="para-mob">
            About Diksuchi Founded in 201<span>8</span>, Diksuchi is an
            architectural firm that takes its name from the word compass a
            symbol of direction and purpose. Just like a compass guides the way,
            Diksuchi helps clients navigate the journey of designing and
            building thoughtful spaces.
          </p>
          <h3 className="since-mob">
            On the market
            <br />
            since 201<span>8</span>
          </h3>
          <h1 className="title-mob">MEET MRUDULA INDUR,</h1>
          <img className="owner-mobile" src="/owner.png" />
          <p className="para-mob">
            The creative force behind Diksuchi, a Hyderabad based
            architectural firm founded in 2018. With a deep rooted passion for
            design and a strong commitment to sustainable architecture,
            Mrudula brings a perfect blend of creativity, functionality, and
            environmental consciousness to every project.{" "}
          </p>
          <p className="para-mob">
            Her architectural journey began with a B. Arch from CSIIT,
            followed by a Master's in Sustainable Architecture from Bharati
            Vidyapeeth, Pune. This educational foundation, paired with years
            of hands on experience.
          </p>
          <div className="socials-mob">
            <Link to="https://www.instagram.com/diksuchidesignstudio/">
              <img src="/instagram.png" />
            </Link>
            <Link to="https://www.linkedin.com/company/diksuchidesignstudio/">
              <img src="/linkedin.png" />
            </Link>
          </div>
          <Link to="/works">
            <div className="link-mob">
              <p>
                <u>Our works</u>
              </p>
              <img src="/diag-arrow.png" />
            </div>
          </Link>
          <h1 className="title-mob">
            EXPLORE OUR JOURNEY OF
            <br />
            DESIGN & INNOVATION.
          </h1>
          <div className="our-works-cards-mob">
            <OurWorksCard imgSrc="/ourworks/OurWorks2.png" title="Mokila FarmHouse"/>
          </div>
          <Link to="/publications">
            <div className="link-mob">
              <p>
                <u>Publications</u>
              </p>
              <img src="/diag-arrow.png" />
            </div>
          </Link>
          <h1 className="title-mob">
            OUR PUBLICATIONS
          </h1>
          <div className="our-works-cards-mob">
            <PublicationsCard imgsrc="" title="Name"/>
          </div>
        </div>
        <div id="our-studio" className="our-studio">
          <OurStudioMobile />
        </div>
        <FooterMobile />
      </div>
    </>
    );
}