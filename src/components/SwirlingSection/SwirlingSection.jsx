import React, { useRef, useLayoutEffect } from 'react'
import './SwirlingSection.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

const SwirlingSection = () => {
    const swirlIntroTextRef = useRef();
    const swirlingIntroTextContainerRef = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: swirlingIntroTextContainerRef.current,
                scrub: 1,
                // start: `${swirlingIntroTextContainerRef.current.offsetTop}`,
                // end: `bottom -100%`,
                end: `+=${window.innerHeight * 3}`,
                pin: true,
                // markers: {indent: 30, startColor: "white"}
            }
        });
        // tl.to(swirlIntroTextRef.current, { scale: 40, xPercent: "260", yPercent: "600"})
        tl.from(swirlIntroTextRef.current, { '--rot': 0 })
        // tl.to(swirlingIntroTextContainerRef.current, { duration: 0.11 })
        tl.to(swirlIntroTextRef.current, { scale: '+=160', ease: "power1.in" })
        tl.to(swirlIntroTextRef.current, { '--perc': '0.0', ease: "power1.inOut" }, "<+=50%")
        // const tlAfterZoom = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: swirlingIntroTextContainerRef.current,
        //         scrub: false,
        //         pin: true,
        //     }
        // })

        // tlAfterZoom.to(swirlIntroTextRef.current, { scale: '+=175', ease: "expo4.inOut" })

        // tl.add(tlAfterZoom, ">+=100%");

        return () => tl.revert();
    }, [])

    return (
        <>
            <div className='swirling-section' ref={swirlingIntroTextContainerRef}>
                <h1 className="swirling-text-heading font-glacial-r" ref={swirlIntroTextRef}>
                    THE FINEST ARCHITECTS <br /> YOU CAN FIND
                </h1>
            </div>
            <div className="swirling-section">
                <div className="swrirling-images-title">
                    PORTFOLIO
                </div>
            </div>
        </>
    )
}

export default SwirlingSection