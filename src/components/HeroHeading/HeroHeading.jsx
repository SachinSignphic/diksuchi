import React, { useLayoutEffect, useRef } from 'react';
import './HeroHeading.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HeroHeading = () => {
  const titleContainerRef = useRef()

  useLayoutEffect(() => {
    const mobileTitleAnimContext = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const mM = gsap.matchMedia()

      mM.add("(max-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: titleContainerRef.current,
            start: '0% top',
            scrub: 1,
          }
        })

        tl.to(titleContainerRef.current, { backgroundPositionX: '50%' })

      })
    })
    
    return () => mobileTitleAnimContext.revert()
  }, [])

  return (
    <div className='hero-title-container' ref={titleContainerRef}>
      <div className='company-name font-glacial-b color-bw-gradient-title'>DIKSUCHI</div>
      <div className='company-subname font-glacial-b color-bw-gradient-title'>ARCHITECTS</div>
    </div>
  )
}

export default HeroHeading