import React, { useLayoutEffect, useRef } from 'react';
import './Navbar.css';
import {gsap} from 'gsap';

const Navbar = () => {
  const menuBarRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(menuBarRef.current, { yPercent: -100, duration: 2, ease: "expo.inOut" }, { yPercent: 45 })

    return () => tl.revert();
  }, []);

  return (
    <div className='menu-nav' ref={menuBarRef}>
        <div className="menu-icon">
          <span className="menu-line"></span>
          <span className="menu-line short"></span>
        </div>
    </div>
  )
}

export default Navbar