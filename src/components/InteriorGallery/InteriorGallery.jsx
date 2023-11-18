import React from 'react'
import './InteriorGallery.css'

const InteriorGallery = () => {
    return (
        <div className='architecture-wrapper'>
            <div className="architecture-title-wrapper">
                <h1 className='font-glacial-r'>INTERIOR</h1>
                <h2 className='font-glacial-r'>ELEGANT INTERIORS</h2>
            </div>
            <div className="architecture-images">
                <div className="left-images">
                    <div className="small-big-container">
                        <img src="/Frame 75.png" alt="" />
                        <img src="/Frame 76.png" alt="" />
                    </div>
                    <div className="modern-container">
                        <img src="/Frame 77.png" alt="" />
                    </div>
                </div>
                <div className="right-images">
                    <div className="text-and-image">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate?</p>
                        <img src="/Frame 78.png" alt="" />
                    </div>
                    <div className="image-bottom">
                        <img src="/Frame 79.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InteriorGallery