import React, { useLayoutEffect, useRef } from 'react'
import './WordFromFounder.css'
import gsap from 'gsap'

const WordFromFounder = () => {
    const WordFromFounderRef = useRef()
    const paragraphs = useRef()
    const wordFromFounderTitle = useRef()
    const founderProgress = useRef()

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                pin: true,
                scrub: true,
                trigger: WordFromFounderRef.current,
                end: 'bottom bottom',
                // markers: true
            },
            // defaults: {
            //     ease: ""
            // }
        })
        const paras = paragraphs.current;
        const selector = gsap.utils.selector(paras)

        tl.set(founderProgress.current, { transformOrigin: "left center" })
        tl.from(wordFromFounderTitle.current, { opacity: 0 })
        tl.from(paras, { opacity: 0 }, "<")
        tl.to(selector(":first-child"), { yPercent: -100, ease: "power1.inOut" })
        tl.fromTo(founderProgress.current, { scaleX: 0 }, { scaleX: 1.6 }, "<")
        return () => tl.revert()
    }, [])

    return (
        <div className='word-from-founder' ref={WordFromFounderRef}>
            <div className="founder-image-container">
                <img src="/placeholder.jpg" alt="Placeholder" />
            </div>
            <div className="founder-paragraph">
                <hr ref={founderProgress} />
                <h1 className='font-glacial-r' ref={wordFromFounderTitle}>WORD FROM OUR FOUNDER</h1>
                <div className="founder-p" ref={paragraphs}>
                    <div>
                        <p className='font-glacial-r'>
                            Embark on a captivating design journey with me at Diksuchi Design Studio, where we seamlessly blend creativity with functionality. As the Chief Architect, my passion for architecture knows no limits, and our vibrant studio in Hyderabad, Telangana, serves as the dynamic hub for innovative ideas
                        </p>
                        <p className='font-glacial-r'>
                            My architectural voyage began with a B.Arch degree from C.S.I.I.T, followed by a specialization in sustainable architecture with an M.Arch from Bharati Vidyapeeth Pune, laying the foundation for our deep understanding of architectural principles.
                        </p>
                        <p className='font-glacial-r'>
                            Together, we believe in the power of sustainable design, creating concepts that are not just minimalistic and functional but also highly efficient. Our commitment to harmonizing human living spaces with the environment is evident in projects like the P House—a sustainable and energy-efficient dwelling that seamlessly merges modern design with environmental consciousness.
                        </p>
                        <p className='font-glacial-r'>
                            At Diksuchi Design Studio, we are thrilled to share more of our remarkable work with you. Our exceptional talent, meticulous attention to detail, and unwavering commitment to client satisfaction make us an integral part of the team. Join us in experiencing a transformative design journey that exceeds expectations.
                        </p>
                        <p className='font-glacial-r'>
                            Together, let's witness the fusion of creativity and functionality at its zenith.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordFromFounder