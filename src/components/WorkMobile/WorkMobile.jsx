import React from "react";
import "./WorkMobile.css";
import FooterMobile from "../FooterMobile/FooterMobile";
import OurWorksCard from "../OurWorksCard/OurWorksCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function WorkMobile() {
  const navigate = useNavigate();
  return (
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
        <h1>OUR WORKS</h1>
      </div>
      <div className="our-works-cards-mobile">
        <OurWorksCard imgSrc="/ourworks/OurWorks1.png" title="Mr.Vinay's FarmHouse"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks2.png" title="Mokila FarmHouse"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks3.png" title="Gowtham Reddy Residence"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks4.png" title="Pooja First Leaf Villa"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks5.png" title="Anuasha's Residence"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks6.png" title="Diksuchi's New Office"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks7.png" title="Azad Engineering Ltd"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks8.png" title="Corporate Law Office"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks9.png" title="Nirmala Maternity Clinic"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks10.png" title="Poorna Chandra Reddy Villa"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks11.png" title="P House"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks12.png" title="Suguna Gardens"/>
        <OurWorksCard imgSrc="/ourworks/OurWorks13.png" title="Dr.Revant's Hair Clinic"/>
      </div>
      <FooterMobile />
    </>
  );
}