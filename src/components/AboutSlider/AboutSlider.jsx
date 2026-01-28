import React, { useEffect, useRef } from "react";
import "./AboutSlider.css";

const AboutSlider = ({ title, data = [] }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isPaused = false;

    const pause = () => (isPaused = true);
    const play = () => (isPaused = false);

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", play);

    const speed = 1.5; // 👈 ultra-smooth

    const interval = setInterval(() => {
      if (isPaused) return;

      slider.scrollLeft += speed;

      // reset at halfway point (SEAMLESS)
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 20); // ~60fps

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", play);
    };
  }, []);
  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>

      <div className="process-slider" ref={sliderRef}>
        {[...data, ...data].map((item, index) => (
          <React.Fragment key={index}>
            <div className="slider-items">
              <img src={item.image} />
              <p>{item.title}</p>
            </div>

            <img className="slider-arrow" src="/slider-arrow.png" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutSlider;
