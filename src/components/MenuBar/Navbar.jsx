import React, { useLayoutEffect, useRef } from 'react';
import './Navbar.css';
import {gsap} from 'gsap';

const Navbar = () => {
  const menuBarRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.from(menuBarRef.current, { y: -145, duration: 2, ease: "expo.inOut" })

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