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
    const introScrollProgressRef = useRef()
    const scrollingImagesRef = useRef()

    const getBezier = (cx, cy, rx, ry, autorot) => {
        ry = ry || rx;

        var k = 0.551915024494;
        var x = k * rx;
        var y = k * ry;

        return {
            autoRotate: autorot || false,
            type: "quadratic",
            path: [
                { x: cx + rx, y: cy },
                { x: cx + rx, y: cy + y }, { x: cx + x, y: cy + ry }, { x: cx, y: cy + ry },
                { x: cx - x, y: cy + ry }, { x: cx - rx, y: cy + y }, { x: cx - rx, y: cy },
                { x: cx - rx, y: cy - y }, { x: cx - x, y: cy - ry }, { x: cx, y: cy - ry },
                { x: cx + x, y: cy - ry }, { x: cx + rx, y: cy - y }, { x: cx + rx, y: cy }
            ]
        };
    }

    const rotateArray = (arr, steps) => {
        const rotatedArray = [...arr];
        for (let i = 0; i < steps; i++) {
            const firstElement = rotatedArray.shift();
            rotatedArray.push(firstElement);
        }
        return rotatedArray;
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        const mM = gsap.matchMedia();

        mM.add("(min-width: 769px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: swirlingIntroTextContainerRef.current,
                    scrub: 1,
                    end: `bottom bottom`,
                    pin: true,
                    // markers: {indent: 30, startColor: "white"}
                },
            });
            // console.log(swirlIntroTextRef.current)
            tl.from(swirlIntroTextRef.current.childNodes, { '--rot': 0 })
            tl.to(introScrollProgressRef.current, { scaleX: 1.323 }, "<")
            tl.to(scrollingImagesRef.current, { yPercent: -100, ease: "power2.inOut" }, "<")
            tl.to(swirlIntroTextRef.current, { scale: '+=175', ease: "power1.in" })
            tl.to(scrollingImagesRef.current, { opacity: 0, ease: "power2.inOut" }, "<-=60%")
            // tl.to(swirlIntroTextRef.current, { '--perc': '0.0', ease: "power1.inOut" })
            tl.eventCallback("onComplete", () => {
                window.scrollTo({ top: portfolioImagesSectionRef.current.offsetTop, behavior: "smooth" })
                tl.set(swirlIntroTextRef.current, { clearProps: true }, )
                // maybe create a new timeline for placing the text after zooming automatically, then once complete, automatically
                // play the timeline after being paused
                // setAnimation(
                //     TweenMax.to(imgRef, 10, {
                //         rotation: 360,
                //         repeat: -1
                //     }).pause()
                // );

                // like this
                const portfolioImageAppearTL = gsap.timeline()
                portfolioImageAppearTL.to(portfolioImagesSectionRef.current, { opacity: 1, duration: 1.5, ease: "power2.inOut" })
            })


            const swirlTimeline = gsap.timeline({
                defaults: { ease: "none", duration: 10, },
            })

            const precisionImagesCircle = getBezier(250, 250, 250, 250, false)

            swirlTimeline.set(precisionImages.current.children, { xPercent: -50, yPercent: -50, })
            console.log(precisionImagesCircle.path)
            
            for (let i = 0; i < precisionImages.current.children.length; i++) {
                    let newPath = rotateArray(precisionImagesCircle.path, i)
                
                    console.log("current elemtn starting x and y are:" + precisionImagesCircle.path[i].x + " " + precisionImagesCircle.path[i].y)
                    console.dir("current elemtn path" + JSON.stringify(newPath), { depth: 5 })
                
                    swirlTimeline
                        .fromTo(precisionImages.current.children[i], { x: precisionImagesCircle.path[i].x, y: precisionImagesCircle.path[i].y, } , { motionPath: { ...precisionImagesCircle, path: newPath }, repeat: -1 }, "<")
                }
            // const r = 300;
            // swirlTimeline.set(precisionImages.current.children[4], { xPercent: 0, yPercent: 0, })
            // swirlTimeline.to(precisionImages.current.children[4], { motionPath: {
            //     path: `M 0%, 50%
            //             a ${r},${r} 0 1,0 ${r * 2},0
            //             a ${r},${r} 0 1,0 -${r * 2},0z`
            // } , repeat: -1 }, "<")
            // swirlTimeline.set(precisionImages.current.children[3], { xPercent: 50, yPercent: 100, }, "<")
            // swirlTimeline.to(precisionImages.current.children[3], { motionPath: {
            //     path: `M 0%, 50%
            //             a ${r},${r} 0 1,0 ${r * 2},0
            //             a ${r},${r} 0 1,0 -${r * 2},0z`
            // } , repeat: -1 }, "<")
            // swirlTimeline.to(precisionImages.current.children[5], { motionPath: 'M100,10 A90,90 0 1,1 10,100 A90,90 0 1,1 100,190' , repeat: -1 }, "<")

        })

        mM.add("(max-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: swirlingIntroTextContainerRef.current,
                    // scrub: true,
                    start: "0% top",
                    end: "bottom bottom",
                    pin: true,
                    anticipatePin: 1,
                }
            });
            tl.from(swirlIntroTextRef.current, { '--rot': 0, duration: 1 })
            tl.to(swirlIntroTextRef.current, { scale: 103, ease: "expo.inOut", duration: 2 })
            tl.to(swirlIntroTextRef.current, { '--perc': 0, duration: 1 })
            tl.eventCallback("onComplete", () => {
                tl.revert()
                window.scrollTo({
                    top: portfolioImagesSectionRef.current.offsetTop,
                    behavior: "instant"
                })
            })
        })

        return () => mM.revert();
    }, [])

    return (
        <>
            <div className='swirling-section' ref={swirlingIntroTextContainerRef}>
                <div className='swirling-intro-text' ref={swirlIntroTextRef}>
                    <hr ref={introScrollProgressRef} />
                    <h1 className="swirling-text-heading font-glacial-b">THE FINEST</h1>
                    <span className='font-glacial-b single-word-nofill'>ARCHITECTS</span>
                    <h1 className="swirling-text-heading font-glacial-b">YOU CAN FIND</h1>
                </div>
                <div className="carousel-cards" ref={scrollingImagesRef}>
                    {/* repalce with a map on array */}
                    <div className="carousel-card-container">
                        <img src="/architecture.jpg" alt="Acrhitecure" />
                    </div>
                    <div className="carousel-card-container">
                        <img src="/interior.jpg" alt="Interior" />
                    </div>
                    <div className="carousel-card-container">
                        <img src="/architecture.jpg" alt="Acrhitecure" />
                    </div>
                    <div className="carousel-card-container">
                        <img src="/interior.jpg" alt="Interior" />
                    </div>
                </div>
            </div>
            <div className="swirling-section portfolio-section" ref={portfolioImagesSectionRef}>
                <div className="images-container" id="precision" ref={precisionImages}>
                    {/* repalce with a map on array */}
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
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