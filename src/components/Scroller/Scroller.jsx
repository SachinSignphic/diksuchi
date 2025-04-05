// Scroller.js
import React, { useEffect } from 'react';
import './Scroller.css';

const Scroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="scroller">
        <div className="scroller__inner">
          <img src="./1.webp" alt="" />
          <img src="./2.webp" alt="" />
          <img src="./3.webp" alt="" />
          <img src="./4.webp" alt="" />
          <img src="./5.webp" alt="" />
          <img src="./6.webp" alt="" />
        </div>
      </div>
      <div className="scroller">
        <div className="scroller__inner left">
          <img src="./scroll-1.webp" alt="" />
          <img src="./scroll-2.webp" alt="" />
          <img src="./scroll-3.webp" alt="" />
          <img src="./scroll-4.webp" alt="" />
          <img src="./scroll-5.webp" alt="" />
          <img src="./scroll-6.webp" alt="" />
        </div>
      </div>
      <div className="scroller">
        <div className="scroller__inner">
          <img src="./scroll-7.webp" alt="" />
          <img src="./slider-1.webp" alt="" />
          <img src="./slider-2.webp" alt="" />
          <img src="./slider-3.webp" alt="" />
          <img src="./slider-4.webp" alt="" />
          <img src="./slider-5.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scroller;
