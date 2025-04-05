import React, { useLayoutEffect, useRef, useState } from 'react'
import { Navbar, OurStory } from '../components'

const About = () => {
    const storyPageRef = useRef()
    const [pageRef, setPageRef] = useState(null)

    useLayoutEffect(() => {
        setPageRef(storyPageRef)
    }, [storyPageRef])

    return (
        <div className='story-page' ref={storyPageRef} 
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Navbar />
            <OurStory pageRef={pageRef} />
        </div>
    )
}

export default About