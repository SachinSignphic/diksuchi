import React, { useRef, useLayoutEffect } from 'react'
import './SwirlingSection.css'
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';
import { useLenis } from '@studio-freight/react-lenis';

const SwirlingSection = () => {
    const swirlIntroTextRef = useRef();
    const swirlingIntroTextContainerRef = useRef();
    const portfolioTextRef = useRef();
    const portfolioImagesSectionRef = useRef();
    const introScrollProgressRef = useRef()
    const scrollingImagesRef = useRef()
    const precisionImages = useRef();
    const excellenceImages = useRef()
    const marvelousImages = useRef()

    
    const handleTextMouseOver = ({ currentTarget }) => {
        gsap.to(document.querySelectorAll(".precision"), { opacity: 1 })
    }
    
    const handleTextMouseLeave = ({ currentTarget }) => {
        gsap.to(document.querySelectorAll(".precision"), { opacity: 0.3 })
    }
    
    useLenis((f) => {

        let scrollAmount = parseInt(f.scroll.toFixed(0))
        if (scrollAmount > 2800 && scrollAmount < 3000 && f.direction == 1) {
            f.scrollTo(portfolioImagesSectionRef.current.offsetTop + 50, { duration: 4 })
        }
    })

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        const mM = gsap.matchMedia();

        // window.addEventListener("scroll", (e) => {
        //     if (window.pageYOffset == portfolioImagesSectionRef.current.offsetTop - 1100) { 
        //         console.log("triggered")
        //      }
        // }) // garbage not working

        mM.add("(min-width: 769px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: swirlingIntroTextContainerRef.current,
                    scrub: 1,
                    end: `60% bottom`,
                    pin: true,
                    markers: true,
                    onLeave: (self) => {
                        window.scrollTo({ top: portfolioImagesSectionRef.current.offsetTop, behavior: "smooth" }) // works without Lenis
                    }
                },
                // gotta try react lenis docs to learn how to scroll to certain position
                // or else, add separate eventListener to window and then do manually
            });
            
            tl.from(swirlIntroTextRef.current.childNodes, { '--rot': 0 })
            tl.to(introScrollProgressRef.current, { scaleX: 1.323 }, "<")
            tl.to(scrollingImagesRef.current, { yPercent: -100, ease: "power1.inOut" }, "<")
            tl.to(swirlIntroTextRef.current, { scale: '+=175', ease: "power1.in",})
            tl.to(scrollingImagesRef.current, { opacity: 0, ease: "power2.inOut", onComplete: () => {
                tl.to(swirlIntroTextRef.current, { opacity: 0 }, )
                console.log("vela seidhaa illayaa", portfolioImagesSectionRef.current.offsetTop)
            } }, "<-=40%")
            tl.eventCallback("onComplete", () => {
                const portfolioImageAppearTL = gsap.timeline()
                portfolioImageAppearTL.to(portfolioImagesSectionRef.current, { autoAlpha: 1, duration: 1.5, ease: "power2.inOut" })
            })
            const swirlTimeline = gsap.timeline({
                defaults: { ease: "none", duration: 32, repeat: -1 },
            })

            swirlTimeline.to(precisionImages.current, { rotation: 360 })
            swirlTimeline.set(precisionImages.current.children[0], { xPercent: 40, yPercent: 20 }, "<")
            swirlTimeline.to(precisionImages.current.children[0], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[1], { xPercent: -20, yPercent: 160 }, "<")
            swirlTimeline.to(precisionImages.current.children[1], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[2], { xPercent: 40, yPercent: "+=300" }, "<")
            swirlTimeline.to(precisionImages.current.children[2], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[3], { xPercent: 225, yPercent: "+=350" }, "<")
            swirlTimeline.to(precisionImages.current.children[3], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[4], { xPercent: 420, yPercent: "+=300" }, "<")
            swirlTimeline.to(precisionImages.current.children[4], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[5], { xPercent: 500, yPercent: "+=160" }, "<")
            swirlTimeline.to(precisionImages.current.children[5], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[6], { xPercent: 410, yPercent: "+=20" }, "<")
            swirlTimeline.to(precisionImages.current.children[6], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[7], { xPercent: 225, yPercent: "-=20" }, "<")
            swirlTimeline.to(precisionImages.current.children[7], { rotation: -360 }, "<")
            
            swirlTimeline.to(excellenceImages.current, { rotation: -360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[0], { xPercent: 100, yPercent: 40 }, "<")
            swirlTimeline.to(excellenceImages.current.children[0], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[1], { xPercent: -50, yPercent: "+=280" }, "<")
            swirlTimeline.to(excellenceImages.current.children[1], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[2], { xPercent: 50, yPercent: "+=510" }, "<")
            swirlTimeline.to(excellenceImages.current.children[2], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[3], { xPercent: 420, yPercent: "+=650" }, "<")
            swirlTimeline.to(excellenceImages.current.children[3], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[4], { xPercent: 780, yPercent: "+=510" }, "<")
            swirlTimeline.to(excellenceImages.current.children[4], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[5], { xPercent: 880, yPercent: "+=280" }, "<")
            swirlTimeline.to(excellenceImages.current.children[5], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[6], { xPercent: 720, yPercent: "+=40" }, "<")
            swirlTimeline.to(excellenceImages.current.children[6], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[7], { xPercent: 420, yPercent: "-=40" }, "<")
            swirlTimeline.to(excellenceImages.current.children[7], { rotation: 360 }, "<")
            
            swirlTimeline.to(marvelousImages.current, { rotation: 360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[0], { xPercent: 70, yPercent: 150 }, "<")
            swirlTimeline.to(marvelousImages.current.children[0], { rotation: -360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[1], { xPercent: -50, yPercent: "+=480" }, "<")
            swirlTimeline.to(marvelousImages.current.children[1], { rotation: -360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[2], { xPercent: 80, yPercent: "+=780" }, "<")
            swirlTimeline.to(marvelousImages.current.children[2], { rotation: -360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[3], { xPercent: 650, yPercent: "+=950" }, "<")
            swirlTimeline.to(marvelousImages.current.children[3], { rotation: -360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[4], { xPercent: 1320, yPercent: "+=480" }, "<")
            swirlTimeline.to(marvelousImages.current.children[4], { rotation: -360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[5], { xPercent: 1180, yPercent: "+=780" }, "<")
            swirlTimeline.to(marvelousImages.current.children[5], { rotation: -360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[6], { xPercent: 1180, yPercent: "+150" }, "<")
            swirlTimeline.to(marvelousImages.current.children[6], { rotation: -360 }, "<")
            swirlTimeline.set(marvelousImages.current.children[7], { xPercent: 650, yPercent: "-=40" }, "<")
            swirlTimeline.to(marvelousImages.current.children[7], { rotation: -360 }, "<")


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

        return () =>{ 
            window.removeEventListener("scroll", () => {})
            mM.revert();
        }
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
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                </div>

                {/* the below divs should have images from those categories
                    for now, just keep it commented
                */}
                <div className="images-container" id="excellence" ref={excellenceImages}>
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                </div>
                <div className="images-container" id="marvelous" ref={marvelousImages}>
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                    <img src="/placeholder.jpg" className='marvelous-image' alt="" />
                </div>

                <div className="swirling-section-text-wrapper">
                    <h1 className="swrirling-images-title font-glacial-r" ref={portfolioTextRef}>PORTFOLIO</h1>
                    <div className="swirling-section-type-selector">
                        <h2 className="portfolio-selector font-glacial-r" onMouseOver={handleTextMouseOver} onMouseLeave={handleTextMouseLeave}>PRECISION</h2>
                        <h2 className="portfolio-selector font-glacial-r">EXCELLENCE</h2>
                        <h2 className="portfolio-selector font-glacial-r">MARVELOUS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwirlingSection