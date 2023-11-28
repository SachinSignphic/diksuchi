import { useLayoutEffect, useRef } from 'react';
import './ProjectChoice.css';
import architecture from '/slider-1.webp'
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import { Link } from "react-router-dom"

const ProjectChoice = () => {
    gsap.registerPlugin(ScrollTrigger)
    const projectChoiceImage = useRef();
    const interiorImage = useRef();
    const architectureTextRef = useRef();
    const interiorTextRef = useRef();
    const rightCardRef = useRef();
    const leftCardRef = useRef();

    const rightCardImgWrapper = useRef()
    const leftCartImgWrapper = useRef()

    const handleOnMouseEnter = ({ currentTarget }) => {
        const selectionFrom = gsap.utils.selector(currentTarget)

        gsap.to(selectionFrom('h1'), { xPercent: -5, yPercent: -25, duration: 0.6, ease: "power3.inOut" })
        gsap.to(selectionFrom('img'), { xPercent: 20, yPercent: 20, duration: 0.6, ease: "power3.inOut" })
    }
    
    const handleOnMouseLeave = ({ currentTarget }) => {
        const selectionFrom = gsap.utils.selector(currentTarget)

        gsap.to(selectionFrom('h1'), { xPercent: 0, yPercent: 0, duration: 0.6, ease: "power3.inOut" })
        gsap.to(selectionFrom('img'), { xPercent: 0, yPercent: 0, duration: 0.6, ease: "power3.inOut" })
    }
    
    const handleOnMouseEnter1 = ({ currentTarget }) => {
        const selectionFrom = gsap.utils.selector(currentTarget)

        gsap.to(selectionFrom('h1'), { xPercent: 5, yPercent: 25, duration: 0.6, ease: "power3.inOut" })
        gsap.to(selectionFrom('img'), { xPercent: -20, yPercent: -55, duration: 0.6, ease: "power3.inOut" })
    }
    
    const handleOnMouseLeave1 = ({ currentTarget }) => {
        const selectionFrom = gsap.utils.selector(currentTarget)

        gsap.to(selectionFrom('h1'), { xPercent: 0, yPercent: 0, duration: 0.6, ease: "power3.inOut" })
        gsap.to(selectionFrom('img'), { xPercent: 0, yPercent: 0, duration: 0.6, ease: "power3.inOut" })
    }
    
    useLayoutEffect(() => {
        const mM = gsap.matchMedia();

        mM.add("(max-width: 768px)", () => {
            const tl = gsap.timeline({

            });

            tl.from(architectureTextRef.current, {
                scale: 2,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: rightCardRef.current,
                    scrub: true,
                    start: "-50% bottom",
                    end: "200 80%",
                    // markers: true,
                }
            })
            tl.to(projectChoiceImage.current, {
                x: 30,
                y: 40,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: rightCardRef.current,
                    scrub: true,
                    start: "-50% bottom",
                    end: "200 80%",
                    // markers: true,
                }
            })

            tl.from(interiorTextRef.current, {
                scale: 2,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: leftCardRef.current,
                    scrub: true,
                    start: "-10% bottom",
                    end: "200 80%",
                    // markers: true,
                }
            })
            tl.to(interiorImage.current, {
                x: -30,
                y: 40,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: leftCardRef.current,
                    scrub: true,
                    start: "-10% bottom",
                    end: "200 80%",
                    // markers: true,
                }
            })
        })

        mM.add("(min-width: 769px)", () => {
            const architectureLetters = SplitType.create(architectureTextRef.current);
            const interiotLetter = SplitType.create(interiorTextRef.current);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectChoiceImage.current,
                    start: "top center",
                    // markers: { fontSize: 20 },
                }
            });

            tl.set(rightCardRef.current, { scale: 0.9 })
            tl.set(leftCardRef.current, { scale: 0.9 })

            tl.from(architectureLetters.chars, {
                yPercent: 100, stagger: 0.03, duration: 1, ease: "expo.inOut",
            })

            tl.from(interiotLetter.chars, { yPercent: 100, stagger: 0.03, duration: 1, ease: "expo.inOut", })
        })

        return () => mM.revert();

    }, [])

    return (
        <div className='project-choice'>
            <Link preventScrollReset className="fw-card from-right" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} ref={rightCardRef} data-blobity-tooltip="visit ↗" data-blobity-magnetic="false" data-no-blobity to="/architecture">
                <div ref={rightCardImgWrapper}>
                    <img key={0} src={architecture} alt="Architecture" ref={projectChoiceImage} />
                </div>
                <h1 className="fw-card-title font-glacial-b" ref={architectureTextRef}>Architecture</h1>
            </Link>
            <Link className="fw-card from-left" onMouseEnter={handleOnMouseEnter1} onMouseLeave={handleOnMouseLeave1} data-blobity-tooltip="visit ↗" data-no-blobity data-blobity-magnetic="false" ref={leftCardRef} to="/interiors">
                <div ref={leftCartImgWrapper}>
                    <img key={1} src="/interior.webp" alt="Interior" ref={interiorImage} />
                </div>
                <h1 className="fw-card-title font-glacial-b right-align" ref={interiorTextRef}>Interior</h1>
            </Link>
        </div>
    )
}

export default ProjectChoice