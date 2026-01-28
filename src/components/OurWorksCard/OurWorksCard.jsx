import React from "react";
import "./OurWorksCard.css";

const OurWorksCard = ({ imgSrc, title }) => {
  return (
    <div className="our-card">
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      ></div>
      <p>{title}</p>
    </div>
  );
};

export default OurWorksCard;
