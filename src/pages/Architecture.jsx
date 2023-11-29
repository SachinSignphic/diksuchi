import React from 'react'
import { ArchitectureGallery, Menu, Navbar } from '../components'
import { useLenis } from '@studio-freight/react-lenis'

const Architecture = () => {
    useLenis(scrollController => {
        scrollController.scrollTo(0)
    }, [])
    
    return (
        <>
            <Navbar />
            <br />
            <ArchitectureGallery type={'architecture'} title={'ARCHITECTURE'} subtitle={'ASTONISHING DESIGNS'} />
        </>
    )
}

export default Architecture