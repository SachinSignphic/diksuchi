import React from 'react'
import './InteriorGallery.css'

const InteriorGallery = () => {
    return (
        <div className='architecture-wrapper'>
            <div className="architecture-title-wrapper">
                <h1 className='font-glacial-r'>ARCHITECTURE</h1>
                <h2 className='font-glacial-r'>ASTONISHING DESIGNS</h2>
            </div>
            <div className="architecture-images">
                <div className="left-images">
                    <div className="small-big-container">
                        <img src="/Frame 75.png" alt="" />
                        <img src="/Frame 76.png" alt="" />
                    </div>
                    <div className="modern-container">
                        <h1 className='font-glacial-r'>THE MODERN</h1>
                        <img src="/Frame 77.png" alt="" />
                    </div>
                </div>
                <div className="right-images">
                    <div className="text-and-image">
                        <p className='font-glacial-r'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate?</p>
                        <div>
                            <img src="/Frame 78.png" alt="" />
                            <p className='font-glacial-r'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="image-bottom">
                        <img src="/Frame 79.png" alt="" />
                        <h1 className='font-glacial-r'>HYDERABAD</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InteriorGallery