import React, { useLayoutEffect, useRef } from 'react'
import './ScrollIndicator.css'
import gsap from 'gsap'
import { useLenis } from '@studio-freight/react-lenis'

const ScrollIndicator = () => {
    const scrollBarRef = useRef()
    const scrollController = useLenis()

    const scrollToTop = () => {
        console.log(1 + (scrollController.scroll * 0.001))
        scrollController.scrollTo(0, { duration: 0.5 + (scrollController.scroll * 0.003), lerp: (scrollController.scroll * 0.0001)  })
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