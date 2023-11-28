import React, { useRef, useLayoutEffect } from 'react'
import './SwirlingSection.css'
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';
import { useLenis } from '@studio-freight/react-lenis';
import swirlImages from './swirlingSectionData'
import Blobity from 'blobity';

const SwirlingSection = () => {
    const swirlIntroTextRef = useRef();
    const swirlingIntroTextContainerRef = useRef()
    const portfolioTextRef = useRef()
    const portfolioImagesSectionRef = useRef()
    const introScrollProgressRef = useRef()
    const scrollingImagesRef = useRef()
    const precisionImages = useRef()
    const excellenceImages = useRef()
    const scrollAmount = useRef(0)

    // const cursor = 

    useLenis(scrollController => {
        // console.log(scrollAmount, scrollController.scroll, scrollAmount == scrollController.scroll)
        if (scrollAmount.current != 0 && scrollController.direction == 1) { 
            // console.log(scrollAmount.current)
            scrollController.scrollTo(portfolioImagesSectionRef.current.offsetTop, { duration: 3.2, lock: true })
            scrollAmount.current = 0
            // console.log(scrollAmount.current)
        }
        return () => scrollController.destroy()
    })
    
    const handleTextMouseOver = (targetWord) => {
        gsap.to(document.querySelectorAll(`.${targetWord}`), { opacity: 1, filter: 'blur(0px)', duration: 1 })
    }
    
    const handleTextMouseLeave = (targetWord) => {
        gsap.to(document.querySelectorAll(`.${targetWord}`), { opacity: 0.5, filter: 'blur(4px)', duration: 1 })
    }

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        const mM = gsap.matchMedia();

        mM.add("(min-width: 769px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: swirlingIntroTextContainerRef.current,
                    scrub: 2,
                    end: `bottom bottom`,
                    pin: true,
                    // markers: true,
                    onUpdate: (self) => {
                        if (self.progress.toFixed(2) == 0.49 && self.direction == 1) {
                            scrollAmount.current = 1
                        }
                    }
                },
            });
            
            tl.from(swirlIntroTextRef.current.childNodes, { '--rot': 0 })
            tl.to(introScrollProgressRef.current, { scaleX: 1.323 }, "<")
            tl.to(scrollingImagesRef.current, { yPercent: -70, ease: "power1.inOut" }, "<")
            tl.to(scrollingImagesRef.current.querySelectorAll("img"), { yPercent: -30, ease: "power1.inOut" }, "<")
            tl.to(swirlIntroTextRef.current, { scale: '+=175', ease: "power1.in",})
            tl.to(scrollingImagesRef.current, { opacity: 0, ease: "power2.inOut", onComplete: () => {
                tl.to(swirlIntroTextRef.current, { opacity: 0 }, )
            } }, "<-=40%")
            tl.eventCallback("onComplete", () => {
                const portfolioImageAppearTL = gsap.timeline()
                portfolioImageAppearTL.to(portfolioImagesSectionRef.current, { autoAlpha: 1, duration: 0.8, ease: "power2.inOut" })
            })
            const swirlTimeline = gsap.timeline({
                defaults: { ease: "none", duration: 32, repeat: -1 },
            })

            swirlTimeline.set(precisionImages.current, { scale: 0.875 })
            swirlTimeline.to(precisionImages.current, { rotation: 360 })
            swirlTimeline.set(precisionImages.current.children, { scale: 1.35 }, "<")
            swirlTimeline.set(precisionImages.current.children[0], { xPercent: 20, yPercent: 60 }, "<")
            swirlTimeline.to(precisionImages.current.children[0], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[1], { xPercent: -50, yPercent: 430 }, "<")
            swirlTimeline.to(precisionImages.current.children[1], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[2], { xPercent: 30, yPercent: 700 }, "<")
            swirlTimeline.to(precisionImages.current.children[2], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[3], { xPercent: 260, yPercent: 750 }, "<")
            swirlTimeline.to(precisionImages.current.children[3], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[4], { xPercent: 500, yPercent: 700 }, "<")
            swirlTimeline.to(precisionImages.current.children[4], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[5], { xPercent: 560, yPercent: 250 }, "<")
            swirlTimeline.to(precisionImages.current.children[5], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[6], { xPercent: 500, yPercent: 60 }, "<")
            swirlTimeline.to(precisionImages.current.children[6], { rotation: -360 }, "<")
            swirlTimeline.set(precisionImages.current.children[7], { xPercent: 260, yPercent: -20 }, "<")
            swirlTimeline.to(precisionImages.current.children[7], { rotation: -360 }, "<")
            
            swirlTimeline.to(excellenceImages.current, { rotation: -360 }, "<")
            swirlTimeline.set(excellenceImages.current.children, { scale: 1.3 }, "<")
            swirlTimeline.set(excellenceImages.current.children[0], { xPercent: 80, yPercent: 90 }, "<")
            swirlTimeline.to(excellenceImages.current.children[0], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[1], { xPercent: -50, yPercent: 650 }, "<")
            swirlTimeline.to(excellenceImages.current.children[1], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[2], { xPercent: 60, yPercent: 750 }, "<")
            swirlTimeline.to(excellenceImages.current.children[2], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[3], { xPercent: 450, yPercent: 1400 }, "<")
            swirlTimeline.to(excellenceImages.current.children[3], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[4], { xPercent: 850, yPercent: 970 }, "<")
            swirlTimeline.to(excellenceImages.current.children[4], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[5], { xPercent: 960, yPercent: 650 }, "<")
            swirlTimeline.to(excellenceImages.current.children[5], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[6], { xPercent: 810, yPercent: 180 }, "<")
            swirlTimeline.to(excellenceImages.current.children[6], { rotation: 360 }, "<")
            swirlTimeline.set(excellenceImages.current.children[7], { xPercent: 450, yPercent: "-=40" }, "<")
            swirlTimeline.to(excellenceImages.current.children[7], { rotation: 360 }, "<")

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
                    {
                        Array(7).fill(1).map((_, i) => {
                            return (
                                <div className="carousel-card-container" key={i+53}>
                                    <img src={`/scroll-${i+1}.webp`} alt={`Acrhitecure`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            <div className="swirling-section portfolio-section" ref={portfolioImagesSectionRef}>
                <div className="images-container" id="precision" ref={precisionImages}>
                    {/* repalce with a map on array */}
                    {/* <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" />
                    <img src="/placeholder.jpg" className='precision-image' alt="" />
                    <img src="/placeholder.jpg" className='precision-image precision' alt="" /> */}
                    {
                        Array(8).fill(1).map((x,y) => x+y).map((item, i) => {
                            return (
                                <img src={swirlImages[i].src} key={i} className={`precision-image ${swirlImages[i].category}-image`} alt={``} />
                            )
                        })
                    }
                </div>

                <div className="images-container" id="excellence" ref={excellenceImages}>
                    {/* <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" />
                    <img src="/placeholder.jpg" className='excellence-image' alt="" /> */}
                    {
                        Array(8).fill(1).map((item, i) => {
                            i += 8;
                            return (
                                <img src={swirlImages[i].src} key={i} className={`excellence-image ${swirlImages[i].category}-image`} alt={``} />
                            )
                        })
                    }
                </div>

                <div className="swirling-section-text-wrapper">
                    <h1 className="swrirling-images-title font-glacial-r" ref={portfolioTextRef}>PORTFOLIO</h1>
                    <div className="swirling-section-type-selector">
                        <h2 className="portfolio-selector font-glacial-r" onMouseOver={() => handleTextMouseOver('architecture-image')} onMouseLeave={() => handleTextMouseLeave('architecture-image')}>ARCHITECTURE</h2>
                        <h2 className="portfolio-selector font-glacial-r" onMouseOver={() => handleTextMouseOver('interior-image')} onMouseLeave={() => handleTextMouseLeave('interior-image')}>INTERIOR</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwirlingSection