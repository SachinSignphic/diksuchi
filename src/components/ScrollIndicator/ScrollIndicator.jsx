import React, { useLayoutEffect, useRef } from 'react'
import './ScrollIndicator.css'
import { useLenis } from '@studio-freight/react-lenis'

const ScrollIndicator = ({ height }) => {
    const scrollBarRef = useRef()
    const scrollController = useLenis()

    const scrollToTop = () => {
        // let lerpAmount = Math.abs(1 - (scrollController.scroll * 0.0005))
        let duration = (scrollController.scroll * 0.0022)
        console.log(duration)
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
        (
            navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) ? 
        <>
        </>
        :
        <div className="scoll-indicator-container" style={{ height: height? height + 'vh': 0}}>
            <div className='scroll-indicator'>
                <h4 className='font-glacial-r' onClick={scrollToTop} data-blobity data-blobity-magnetic="false" >SCROLL TO TOP</h4>
                <div className="scroll-bar-wrapper" ref={scrollBarRef}>
                </div>
            </div>
        </div>
    )
}

export default ScrollIndicator