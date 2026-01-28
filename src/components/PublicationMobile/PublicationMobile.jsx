import React from "react";
import "./PublicationMobile.css"
import FooterMobile from "../FooterMobile/FooterMobile";
import PublicationsCard from "../PublicationsCard/PublicationsCard";
import { useNavigate } from "react-router-dom";
const PublicationMobile = () => {
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
        <h1>PUBLICATIONS</h1>
      </div>
      <div className="publication-cards-mob">
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
      </div>
      <FooterMobile />
    </>
  )
}
export default PublicationMobile;