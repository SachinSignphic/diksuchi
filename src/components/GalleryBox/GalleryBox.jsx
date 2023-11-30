import React, { useLayoutEffect, useRef, useState } from 'react'
import './GalleryBox.css'
import gsap from 'gsap'

const GalleryBox = () => {
    const galleryBoxRef = useRef()
    const galleryModalRef = useRef()

    const [modalOpen, setModalOpen] = useState(false)
    const imageToOpenURL = useRef('')
    const initial = useRef(true)

    const toggleModalOpen = (e) => {
        imageToOpenURL.current = e.target.src
        setModalOpen(!modalOpen)
    }

    useLayoutEffect(() => {

        // galleryBoxRef.current.addEventListener("click", (e) => {
        //     e.stopImmediatePropagation()
        //     e.preventDefault()
        //     e.stopPropagation()  
        // })

        const imagesInGallery = galleryBoxRef.current.querySelectorAll("img")

        imagesInGallery.forEach(image => {
            image.addEventListener("click", toggleModalOpen)
        })

        return () => imagesInGallery.forEach(image => image.removeEventListener("click", toggleModalOpen))

    }, [])

    useLayoutEffect(() => {
        if (!galleryModalRef) return;
        const modalContext = gsap.context(() => {
            const tl = gsap.timeline()

            if (initial.current) {
                initial.current = false
                tl.set(galleryModalRef.current, { autoAlpha: 0 })
                return
            }
            
            if (modalOpen) {
                tl.
                    from(galleryModalRef.current, { autoAlpha: 0 })
            } else {
                tl.
                    to(galleryModalRef.current, { autoAlpha: 0 })
            }
        })

        return () => modalContext.revert()
    }, [modalOpen])

    return (
        <>
            {/* {
                modalOpen && ( */}
                    <div className="gallery-modal" ref={galleryModalRef}>
                        <button data-blobity-magnetic="false" data-blobity-tooltip='close' onClick={toggleModalOpen}>
                            <span></span><span></span>
                        </button>
                        {
                            imageToOpenURL.current && <img src={imageToOpenURL.current} alt="image" />
                        }
                    </div>
                 {/* )
            } */}
            <div className="gallery-box" ref={galleryBoxRef}>
                <div className="gallery-title">
                    <h1 className='font-glacial-r'>PORTFOLIO</h1>
                    <h3 className='font-glacial-r'>OUR GALLERY OF LEGACY</h3>
                </div>
                <div className="top-box">
                    <div className="image-left">
                        <img loading="lazy" src="/gallery/g-1.webp" alt="" />
                    </div>
                    <div className="image-between">
                        <div className="between-img">
                            <img loading="lazy" src="/2.webp" alt="" />
                        </div>
                        <div className="between-img">
                            <img loading="lazy" src="/3.webp" alt="" />
                        </div>
                    </div>
                    <div className="image-last">
                        <img loading="lazy" src="/4.webp" alt="" />
                    </div>
                </div>
                <div className="bottom-box">
                    <div className="large-image">
                        <img loading="lazy" src="/5.webp" alt="" />
                    </div>
                    <div className="small-image">
                        <img loading="lazy" src="/slider-1.webp" alt="" />
                    </div>
                    <div className="circle-image">
                        <img loading="lazy" src="/6.webp" alt="" />
                    </div>
                </div>
                <div className="top-box">
                    <div className="image-left">
                        <img loading="lazy" src="/slider-2.webp" alt="" />
                    </div>
                    <div className="image-between">
                        <div className="between-img">
                            <img loading="lazy" src="/slider-3.webp" alt="" />
                        </div>
                        <div className="between-img">
                            <img loading="lazy" src="/slider-4.webp" alt="" />
                        </div>
                    </div>
                    <div className="image-last">
                        <img loading="lazy" src="/slider-5.webp" alt="" />
                    </div>
                </div>
                <div className="bottom-box">
                    <div className="large-image">
                        <img loading="lazy" src="/slider-6.webp" alt="" />
                    </div>
                    <div className="small-image">
                        <img loading="lazy" src="/slider-7.webp" alt="" />
                    </div>
                    <div className="circle-image">
                        <img loading="lazy" src="/slider-9.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryBox