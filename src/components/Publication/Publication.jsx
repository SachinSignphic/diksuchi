import React from "react";
import "./Publication.css"
import Footer from "../Footer/Footer";
import PublicationsCard from "../PublicationsCard/PublicationsCard";
import { useNavigate } from "react-router-dom";
const Publication = () => {
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
        <h1>PUBLICATIONS</h1>
      </div>
      <div className="publication-cards">
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
      </div>
      <div className="publication-cards">
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
      </div>
      <div className="publication-cards">
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
        <PublicationsCard imgsrc="" title="Name"/>
      </div>
      <Footer />
    </>
  )
}
export default Publication;