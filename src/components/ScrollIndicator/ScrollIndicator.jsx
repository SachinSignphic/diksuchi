import React, { useLayoutEffect, useRef } from 'react'
import './ScrollIndicator.css'
import gsap from 'gsap'
import { useLenis } from '@studio-freight/react-lenis'

const ScrollIndicator = () => {
    const scrollBarRef = useRef()
    const scrollController = useLenis()

    const scrollToTop = () => {
        // let lerpAmount = Math.abs(1 - (scrollController.scroll * 0.0005))
        let duration = (scrollController.scroll * 0.0005)
        // console.log(duration, lerpAmount)
        scrollController.scrollTo(0, { duration: duration })
    }

    useLayoutEffect(() => {
        let totalPageHeight = document.body.scrollHeight;

        const handleIndicator = () => {
            let totalScrolled = window.scrollY;
            let totalPerc = (totalScrolled / totalPageHeight) * 100;
            scrollBarRef.current.style.setProperty('--height', totalPerc + "%");
        }

        window.addEventListener("scroll", handleIndicator);

        return () => window.removeEventListener("scroll", handleIndicator);
    }, [])

    return (
        <div className="scoll-indicator-container">
            <div className='scroll-indicator'>
                <h4 className='font-glacial-r' onClick={scrollToTop} data-blobity data-blobity-magnetic="false" >SCROLL TO TOP</h4>
                <div className="scroll-bar-wrapper" ref={scrollBarRef}>
                </div>
            </div>
        </div>
    )
}

export default ScrollIndicator