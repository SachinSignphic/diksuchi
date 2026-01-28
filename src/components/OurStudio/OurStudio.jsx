import React, { useState, useEffect } from "react";
import "./OurStudio.css";

const OurStudio = () => {
  const images = [
    "/studio1.png",
    "/studio2.webp",
    "/studio3.webp",
    "/studio4.webp",
    "/studio5.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    agreement: false,
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 4000); // 3 seconds

  return () => clearInterval(interval);
}, []);


  return (
    <div className="studio" id="ourstudio">
      <div className="studio-left">
        <h1 className="studio-title">OUR STUDIO</h1>
        <p className="studio-desc">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,"
        </p>
        <div className="studio-image-block">
          <button className="arrow left" onClick={handlePrev}>‹</button>
          <img
            src={images[currentIndex]}
            alt={`Studio ${currentIndex + 1}`}
            className="studio-image"
          />
          <button className="arrow right" onClick={handleNext}>›</button>
        </div>
        <p className="studio-desc">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam"
        </p>
      </div>

      <div className="studio-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="field1"
            placeholder="Field 1"
            value={formData.field1}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field2"
            placeholder="Field 2"
            value={formData.field2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field3"
            placeholder="Field 3"
            value={formData.field3}
            onChange={handleChange}
          />
          <textarea
            name="field4"
            placeholder="Field 4"
            className="field4"
            value={formData.field4}
            onChange={handleChange}
          ></textarea>

          <div className="checkbox-row">
            <input
              type="checkbox"
              className="circle"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
            <label>Here by I accept all the agreements</label>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default OurStudio;
