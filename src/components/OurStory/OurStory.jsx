import React, { useLayoutEffect, useRef } from 'react'
import './OurStory.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Socials } from '../'
const imageList = [
  "/home/PAS_2722_1_11zon.webp",
  "/home/PAS_2560_6_11zon.webp",
  "/PAS_2611.webp",
  "/PAS_2659.webp",
  "/PAS_2697.webp",
]
const OurStory = ({ pageRef }) => {
    const ourStoryContent = useRef()
    const ourStoryImages = useRef()
    
    useLayoutEffect(() => {
        if (!pageRef) return
        gsap.registerPlugin(ScrollTrigger)

        const aboutContext = gsap.context(() => {
            const mM = gsap.matchMedia()

            mM.add("(max-width: 768px)", () => {
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
                // tl.to(ourStoryImages.current, { xPercent: -200, ease: "power2.inOut" }, "<")                
                // tl.to(ourStoryImages.current.children, { xPercent: -150, ease: "power2.inOut" }, "<")                
                // tl.to(ourStoryImages.current.querySelectorAll("img"), { xPercent: -100, ease: "power2.inOut" }, "<")                
            })

            mM.add("(min-width: 769px)", () => {

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
                        <img src="/home/PAS_2722_1_11zon.webp" alt="" className="mobile-story-img" />
                        <p className='font-glacial-r'>
                            Diksuchi, a leading architectural powerhouse, takes its name from the compass—a tool synonymous with orientation and navigation. This choice encapsulates the firm's fundamental mission: to provide unwavering guidance and direction in shaping the built environment. Diksuchi is not just an architecture firm; it's a transformative force, firmly believing in the profound impact of well-designed spaces.
                        </p>
                        <img src="/home/PAS_2533_4_11zon.webp" alt="" className="mobile-story-img" />
                        <p className='font-glacial-r'>
                            With a commitment to going beyond mere functionality, Diksuchi strives to create environments that not only fulfill practical needs but also inspire and uplift. Drawing inspiration from the magnetic compass, the firm underlines its dedication to steering clients and projects toward impeccably designed and purposeful outcomes.
                        </p>
                        <img src="/home/PAS_2560_6_11zon.webp" alt="" className="mobile-story-img" />
                        <p className='font-glacial-r'>
                            Diksuchi's expertise lies in crafting comprehensive solutions, offering a clear vision that effortlessly navigates through challenges. Every space under their guidance is a testament to a seamless and captivating experience, ensuring it reflects its intended purpose with grace and purpose. In the world of architecture, Diksuchi stands as a beacon, guiding projects to new heights of design excellence.
                        </p>
                        <img src="/home/PAS_2716_7_11zon.webp" alt="" className="mobile-story-img" />
                        <Socials />
                    </div>
                </div>
                <div className="our-story-right" ref={ourStoryImages}>
  {imageList.map((src, i) => (
    <div key={i} className="story-image">
      <img src={src} alt={`Story image ${i + 1}`} />
    </div>
  ))}
</div>
            </div>
        </div>
    )
}

export default OurStory