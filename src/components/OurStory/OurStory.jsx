import React, { useLayoutEffect, useRef } from 'react'
import './OurStory.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

const OurStory = ({ pageRef }) => {
    const ourStoryContent = useRef()
    const ourStoryImages = useRef()
    
    useLayoutEffect(() => {
        if (!pageRef) return
        gsap.registerPlugin(ScrollTrigger)

        const aboutContext = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pageRef.current,
                    pin: true,
                    scrub: 0.3,
                    end: 'bottom bottom',
                    // markers: {
                    //     indent: 20,
                    //     startColor: "white",
                    //     endColor: "red"
                    // }
                },
                defaults: {
                    ease: "power1.inOut"
                }
            })
            const selector = gsap.utils.selector(ourStoryContent.current)
            // const firstPara = SplitType.create(selector(".story-paras p:first-of-type"))
            // const exceptFirstParas = selector(".story-paras p:not(:first-of-type)")

            // tl.fromTo(firstPara.lines, {opacity: 0}, { opacity: 1, stagger: 0.05 })
            tl.to(selector(".story-paras"), { yPercent: -100 })
            tl.to(ourStoryImages.current.children, { yPercent: -450, ease: "power2.inOut" }, "<")
        })

        return () => aboutContext.revert()
    }, [pageRef])

    return (
        <div className="our-story-wrapper">
            <div className="our-story-title">
                <h1 className='font-glacial-r'>THE STORY</h1>
                <h3 className='font-glacial-r'>OF DIKSUCHI DESIGN STUDIO</h3>
            </div>
            <div className="our-story">
                <div className="our-story-left" ref={ourStoryContent}>
                    <div className="story-paras">
                        <h2 className='font-glacial-r'>HISTORY OF THE ELITE</h2>
                        <p className='font-glacial-r'>
                            Diksuchi, a leading architectural powerhouse, takes its name from the compass—a tool synonymous with orientation and navigation. This choice encapsulates the firm's fundamental mission: to provide unwavering guidance and direction in shaping the built environment. Diksuchi is not just an architecture firm; it's a transformative force, firmly believing in the profound impact of well-designed spaces.
                        </p>
                        <p className='font-glacial-r'>
                            With a commitment to going beyond mere functionality, Diksuchi strives to create environments that not only fulfill practical needs but also inspire and uplift. Drawing inspiration from the magnetic compass, the firm underlines its dedication to steering clients and projects toward impeccably designed and purposeful outcomes.
                        </p>
                        <p className='font-glacial-r'>
                            Diksuchi's expertise lies in crafting comprehensive solutions, offering a clear vision that effortlessly navigates through challenges. Every space under their guidance is a testament to a seamless and captivating experience, ensuring it reflects its intended purpose with grace and purpose. In the world of architecture, Diksuchi stands as a beacon, guiding projects to new heights of design excellence.
                        </p>
                        <div className="social-links">

                        </div>
                    </div>
                </div>
                <div className="our-story-right" ref={ourStoryImages}>
                    {
                        Array(5).fill(1).map((_, i) => {
                            return (
                                    <div key={i} className="story-image">
                                        <img src={`/${i+1}.webp`} alt='' />
                                    </div>
                                    )
                                })
                            }
                </div>
            </div>
        </div>
    )
}

export default OurStory