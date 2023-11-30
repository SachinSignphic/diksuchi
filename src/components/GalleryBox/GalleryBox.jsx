import React from 'react'
import './GalleryBox.css'

const GalleryBox = () => {
    return (
        <>
            <div className="gallery-box">
                <div className="gallery-title">
                    <h1 className='font-glacial-r'>PORTFOLIO</h1>
                    <h3 className='font-glacial-r'>OUR GALLERY OF LEGACY</h3>
                </div>
                <div className="top-box">
                    <div className="image-left">
                        <img src="/1.webp" alt="" />
                    </div>
                    <div className="image-between">
                        <div className="between-img">
                            <img src="/2.webp" alt="" />
                        </div>
                        <div className="between-img">
                            <img src="/3.webp" alt="" />
                        </div>
                    </div>
                    <div className="image-last">
                        <img src="/4.webp" alt="" />
                    </div>
                </div>
                <div className="bottom-box">
                    <div className="large-image">
                        <img src="/5.webp" alt="" />
                    </div>
                    <div className="small-image">
                        <img src="/slider-1.webp" alt="" />
                    </div>
                    <div className="circle-image">
                        <img src="/6.webp" alt="" />
                    </div>
                </div>
                <div className="top-box">
                    <div className="image-left">
                        <img src="/slider-2.webp" alt="" />
                    </div>
                    <div className="image-between">
                        <div className="between-img">
                            <img src="/slider-3.webp" alt="" />
                        </div>
                        <div className="between-img">
                            <img src="/slider-4.webp" alt="" />
                        </div>
                    </div>
                    <div className="image-last">
                        <img src="/slider-5.webp" alt="" />
                    </div>
                </div>
                <div className="bottom-box">
                    <div className="large-image">
                        <img src="/slider-6.webp" alt="" />
                    </div>
                    <div className="small-image">
                        <img src="/slider-7.webp" alt="" />
                    </div>
                    <div className="circle-image">
                        <img src="/slider-9.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryBox