import { useLayoutEffect, useRef } from 'react';
import './Navbar.css';
import { gsap } from 'gsap';
import { navBarAnimation } from './animation';

const Navbar = () => {
  const menuBarRef = useRef();

  useLayoutEffect(() => {
      const timeline = gsap.timeline();

      timeline.add(navBarAnimation(menuBarRef));

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