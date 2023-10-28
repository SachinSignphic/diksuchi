import { useLayoutEffect, useRef } from 'react';
import './MenuBar.css';
import { gsap } from 'gsap';
import { menuBarAnimation } from './animation';

const MenuBar = () => {
  const menuBarRef = useRef();

  useLayoutEffect(() => {
      const timeline = gsap.timeline();

      timeline.add(menuBarAnimation(menuBarRef));

  }, []);

  return (
    <div className='menu-nav' ref={menuBarRef}>
        <div className="menu-icon">||</div>
    </div>
  )
}

export default MenuBar