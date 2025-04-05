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
      
    </div>
  )
}

export default HeroHeading