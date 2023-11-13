import { useLayoutEffect, useRef } from 'react';
import './Navbar.css';
import gsap from 'gsap';

const Navbar = () => {
  const menuBarRef = useRef();

  useLayoutEffect(() => {
      const timeline = gsap.timeline();

      timeline.fromTo(menuBarRef.current,
        { yPercent: -150 },
        { yPercent: 20, ease: "expo.inOut", duration: 2 }
      );

      return () => timeline.revert();

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