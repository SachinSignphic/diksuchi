import React from "react";
import "./PublicationsCard.css";

const PublicationCard = ({ imgSrc, title }) => {
  return (
    <div className="pub-card">
      <div
        className="pub-image"
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      ></div>
      <div className="foot">
        <h4>{title}</h4>
        <div className="pub-link">
          <p><u>View</u></p>
          <img src="/arrow-line.png"/>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;