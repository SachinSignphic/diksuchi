import React, { useLayoutEffect, useRef } from 'react'
import './ArchitectureGallery.css'
import gsap from 'gsap'

const ArchitectureGallery = () => {
    const image1 = useRef()
    const p1 = useRef()
    const image2 = useRef()
    const image3 = useRef()
    const image4 = useRef()
    const image5 = useRef()

    const images = [
        image1.current, 
        p1.current,
        image2.current,
        image3.current,
        image4.current,
        image5.current,
    ]

    useLayoutEffect(() => {
        const tl = gsap.timeline()
        console.log("odtuah")
        // tl.from(toArray(images), { x: '-100vw' })
        tl.from(images, { x: '-100vw', stagger: 0.1, duration: 3, ease: "expo.inOut" })
    }, [])

    return (
        <div className='architecture-wrapper'>
            <div className="architecture-title-wrapper">
                <h1 className='font-glacial-r'>ARCHITECTURE</h1>
                <h2 className='font-glacial-r'>ASTONISHING DESIGNS</h2>
            </div>
            <div className="architecture-images">
                <div className="left-images">
                    <div className="small-big-container">
                        <img src="/Frame 75.png" alt="" ref={image4} />
                        <img src="/Frame 76.png" alt="" ref={image5} />
                    </div>
                    <div className="modern-container" ref={image3}>
                        <h1 className='font-glacial-r'>THE MODERN</h1>
                        <img src="/Frame 77.png" alt="" />
                    </div>
                </div>
                <div className="right-images">
                    <div className="text-and-image">
                        <p className='font-glacial-r' ref={p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate?</p>
                        <div className='little-container' ref={image1}>
                            <img src="/Frame 78.png" alt="" />
                            <p className='font-glacial-r'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="image-bottom" ref={image2}>
                        <img src="/Frame 79.png" alt="" />
                        <h1 className='font-glacial-r'>HYDERABAD</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArchitectureGallery