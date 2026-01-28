import React from "react";
import "./Work.css";
import Footer from "../Footer/Footer";
import OurWorksCard from "../OurWorksCard/OurWorksCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Work = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="work-top-left">
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
        <h1>OUR WORKS</h1>
      </div>
      {/* <div className="work-category">
        <div>All</div>
        <div>Residential</div>
        <div>Interior</div>
        <div>Workspace</div>
        <div>Farmhouse</div>
        <div>Hospital</div>
      </div>*/}
      <div className="work-cards">
        <OurWorksCard imgSrc="/ourworks/OurWorks1.png" title="Mr.Vinay's FarmHouse"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks2.png" title="Mokila FarmHouse"/>
        <Link to="/gowtham-residency" style={{ textDecoration: 'none', color: 'inherit' }}>
          <OurWorksCard imgSrc="/ourworks/OurWorks3.png" title="Gowtham Reddy Residence"/>
        </Link>
      </div>
      <div className="work-cards">
        <OurWorksCard imgSrc="/ourworks/OurWorks4.png" title="Pooja First Leaf Villa"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks5.png" title="Anuasha's Residence"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks6.png" title="Diksuchi's New Office"/>
      </div>
      <div className="work-cards">
        <OurWorksCard imgSrc="/ourworks/OurWorks7.png" title="Azad Engineering Ltd"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks8.png" title="Corporate Law Office"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks9.png" title="Nirmala Maternity Clinic"/>
      </div>
      <div className="work-cards">
        <OurWorksCard imgSrc="/ourworks/OurWorks10.png" title="Poorna Chandra Reddy Villa"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks11.png" title="P House"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks12.png" title="Suguna Gardens"/>
      </div>
      <div className="work-cards">
        <OurWorksCard imgSrc="/ourworks/OurWorks13.png" title="Dr.Revant's Hair Clinic"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks14.png" title="Multi-Speciality Urban Hospital with Penthouse"/>
        <OurWorksCard imgSrc="" title=""/>
      </div>
      <Footer />
    </>
  )
}
export default Work;