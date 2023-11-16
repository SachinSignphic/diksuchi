import { useLayoutEffect, useRef } from 'react'
import './Socials.css'
import {gsap} from 'gsap';

const Socials = () => {
  const socialIconsRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.from(socialIconsRef.current.children, { x: -200, ease: "expo.inOut", stagger: 0.1, duration: 2});

    return () => tl.revert();
  }, []);

  return (
    <div className='socials-bar'>
        {/* <h4 className='socials-title font-glacial-r'>DIKSUSHI</h4>
        <hr className='socials-hr' /> */}
        <div className="socials-icons" ref={socialIconsRef}>
            <div className="icon color-primary">i</div>
            <div className="icon color-primary">j</div>
            <div className="icon color-primary">k</div>
        </div>
    </div>
  )
}

export default Socials