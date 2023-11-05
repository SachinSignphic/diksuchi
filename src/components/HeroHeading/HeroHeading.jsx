import { useLayoutEffect, useRef } from 'react';
import './HeroHeading.css';
import gsap from 'gsap';

const HeroHeading = () => {
  const nameRef = useRef();
  const subRef = useRef();
  
  useLayoutEffect(() => {
    const titleAnimationContext = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(nameRef.current, { y: 200, duration: 1, ease: "expo.inOut" });
      tl.from(subRef.current, { y: -200, duration: 1, ease: "expo.inOut" }, "<");
    });

    return () => titleAnimationContext.revert();
  })

  return (
    <div className='hero-title-container'>
      <div className='company-name font-glacial-r color-bw-gradient-title' ref={nameRef}>DESIGN</div>
      <div className='company-subname font-glacial-b color-bw-gradient-title' ref={subRef}>STUDIO</div>
    </div>
  )
}

export default HeroHeading