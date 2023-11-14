import React, { useRef, useLayoutEffect } from 'react'
import './SwirlingSection.css'
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

const SwirlingSection = () => {
    const swirlIntroTextRef = useRef();
    const swirlingIntroTextContainerRef = useRef();
    const portfolioTextRef = useRef();
    const portfolioImagesSectionRef = useRef();
    const precisionImages = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        const getBezier = (cx, cy, rx, ry, autorot) => {
            ry = ry || rx;

            var k = 0.551915024494;
            var x = k * rx;
            var y = k * ry;

            return {
                autoRotate: autorot || false,
                type: "cubic",
                path: [
                    { x: cx + rx, y: cy },
                    { x: cx + rx, y: cy + y }, { x: cx + x, y: cy + ry }, { x: cx, y: cy + ry },
                    { x: cx - x, y: cy + ry }, { x: cx - rx, y: cy + y }, { x: cx - rx, y: cy },
                    { x: cx - rx, y: cy - y }, { x: cx - x, y: cy - ry }, { x: cx, y: cy - ry },
                    { x: cx + x, y: cy - ry }, { x: cx + rx, y: cy - y }, { x: cx + rx, y: cy }
                ]
            };
        }

        const masterTl = gsap.timeline();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: swirlingIntroTextContainerRef.current,
                scrub: 1,
                // start: `${swirlingIntroTextContainerRef.current.offsetTop}`,
                // end: `bottom -100%`,
                // end: `+=${window.innerHeight * 3}`,
                pin: true,
                // markers: {indent: 30, startColor: "white"}
            }
        });
        tl.from(swirlIntroTextRef.current, { '--rot': 0 })
        tl.to(swirlIntroTextRef.current, { scale: '+=160', ease: "power1.in" })
        tl.to(swirlIntroTextRef.current, { '--perc': '0.0', ease: "power1.inOut" }, "<+=50%")
        tl.eventCallback("onComplete", () => {
            console.log("achaaa")
            tl.set(swirlIntroTextRef.current, { scale: 0 })
            tl.set(swirlIntroTextRef.current, { transform: "none" })
            tl.set(swirlingIntroTextContainerRef.current, { position: "unset" })
            //tl.revert() // i did this because i wanna stop the anim and return to original state
            // tl.set(swirlingIntroTextContainerRef.current, { minHeight: "100vh" })
            swirlingIntroTextContainerRef.current.style.minHeight = "100vh";
        })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: portfolioImagesSectionRef.current,
                // scrub: 1,
                // end: '+=50vh'
                // markers: {indent: 30, startColor: "blue"}
            }
         });
        tl2.from(portfolioTextRef.current, { opacity: 0, ease: "expo.inOut" })
        
        const swirlTimeline = gsap.timeline({
            repeat: -1, 
            defaults: { ease: "none", duration: 10 },
        })
        swirlTimeline.set(precisionImages.current.children, { xPercent: -50, yPercent: -50 })
        swirlTimeline.to(precisionImages.current.children, { motionPath: getBezier(250, 250, 250, 250, false) })

        masterTl.add(tl)
        masterTl.add(tl2)
        masterTl.add(swirlTimeline)

        return () => masterTl.revert();
    }, [])

    return (
        <>
            <div className='swirling-section' ref={swirlingIntroTextContainerRef}>
                <h1 className="swirling-text-heading font-glacial-r" ref={swirlIntroTextRef}>
                    THE FINEST ARCHITECTS <br /> YOU CAN FIND
                </h1>
            </div>
            <div className="swirling-section portfolio-section" ref={portfolioImagesSectionRef}>
                {/* <svg id="message">
                    <path d="M100,10 A90,90 0 1,1 10,100 A90,90 0 1,1 100,190" id="circle" stroke="white" fill="transparent" />
                </svg> */}

                <div className="images-container" id="precision" ref={precisionImages}>
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                </div>

                {/* the below divs should have images from those categories
                    for now, just keep it commented
                */}
                {/* <div className="images-container" id="precision">
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                </div>
                <div className="images-container" id="marvelous">
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                </div> */}

                <div className="swirling-section-text-wrapper">
                    <h1 className="swrirling-images-title font-glacial-r" ref={portfolioTextRef}>PORTFOLIO</h1>
                    <div className="swirling-section-type-selector">
                        <h2 className="portfolio-selector font-glacial-r">PRECISION</h2>
                        <h2 className="portfolio-selector font-glacial-r">EXCELLENCE</h2>
                        <h2 className="portfolio-selector font-glacial-r">MARVELOUS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwirlingSection