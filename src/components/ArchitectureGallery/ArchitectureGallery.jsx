import { useLayoutEffect, useState, useRef } from 'react'
import './ArchitectureGallery.css'
import gsap from 'gsap'
import architectureProjects from './architectureGalleryData'
import interiorProjects from './interiorGalleryData'

const ArchitectureGallery = ({ type, title, subtitle }) => {
    const image1 = useRef()
    const image2 = useRef()
    const image3 = useRef()
    const image4 = useRef()
    const image5 = useRef()
    const p1 = useRef()
    const [projectNo, setProjectNo] = useState(0)
    const data = useRef(type == 'architecture'? architectureProjects: interiorProjects)

    const handleNextClick = (e) => {
        const tl = gsap.timeline()

        const images = [
            image1.current,
            p1.current,
            image2.current,
            image3.current,
            image4.current,
            image5.current,
        ].reverse()
        
        tl.to(images, { x: '-100vw', stagger: 0.1, duration: 2, ease: "expo.inOut" }).then(() => {
            setProjectNo((projectNo + 1) % architectureProjects.length)
        })
    }

    const handlePreviousClick = (e) => {
        const tl = gsap.timeline()

        const images = [
            image1.current,
            p1.current,
            image2.current,
            image3.current,
            image4.current,
            image5.current,
        ].reverse()
        
        tl.to(images, { x: '-100vw', stagger: 0.1, duration: 2, ease: "expo.inOut" }).then(() => {
            setProjectNo((projectNo - 1 + architectureProjects.length) % architectureProjects.length)
        })
    }

    useLayoutEffect(() => {
        const tl = gsap.timeline()
        console.log(projectNo)
        const images = [
            image1.current, 
            p1.current,
            image2.current,
            image3.current,
            image4.current,
            image5.current,
        ]
    
        tl.from(images, { x: '-100vw', stagger: 0.1, duration: 3, ease: "expo.inOut" })

        return () => tl.revert()
    }, [projectNo])

    return (
        <div className='architecture-wrapper'>
            <div className="architecture-title-wrapper">
                <h1 className='font-glacial-r'>{title}</h1>
                <h2 className='font-glacial-r'>{subtitle}</h2>
            </div>
            <div className="architecture-images">
                <div className="left-images">
                    <div className="small-big-container">
                        <div className="image-1">
                            <img loading="lazy" src={`/${type}/${data.current[projectNo].slug}/${data.current[projectNo].prefix}1.webp`} alt='' ref={image4} />
                        </div>
                        <div className="image-2">
                            <img loading="lazy" src={`/${type}/${data.current[projectNo].slug}/${data.current[projectNo].prefix}2.webp`} alt="" ref={image5} />
                        </div>
                    </div>
                    <div className="modern-container" ref={image3}>
                        <h1 className='font-glacial-r'>{data.current[projectNo].title}</h1>
                        <div className="image-3">
                            <img loading="lazy" src={`/${type}/${data.current[projectNo].slug}/${data.current[projectNo].prefix}3.webp`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-images">
                    <div className="text-and-image">
                        <p className='font-glacial-r' ref={p1}>{data.current[projectNo].description}</p>
                        <div className='little-container' ref={image1}>
                            <div className="image-4">
                                <img loading="lazy" src={`/${type}/${data.current[projectNo].slug}/${data.current[projectNo].prefix}4.webp`} alt="" />
                            </div>
                            <p className='font-glacial-r'></p>
                        </div>
                    </div>
                    <div className="image-bottom-2" ref={image2}>
                        <div className="image-5">
                            <img loading="lazy" src={`/${type}/${data.current[projectNo].slug}/${data.current[projectNo].prefix}5.webp`} alt="" />
                        </div>
                        <h1 className='font-glacial-r'>{data.current[projectNo].location}</h1>
                    </div>
                </div>
            </div>
            <div className="architecture-controls">
                <button role='navigation' data-blobity-magnetic="false" data-no-blobity onClick={handlePreviousClick}>
                    <img src="/caret-right.png" alt="Previous" />
                </button>
                <button role='navigation' data-blobity-magnetic="false" data-no-blobity onClick={handleNextClick}>
                    <img src="/caret-right.png" alt="Next" />
                </button>
            </div>
        </div>
    )
}

export default ArchitectureGallery