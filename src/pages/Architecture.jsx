import React from 'react'
import { ArchitectureGallery,ArchitectureList, Menu, Navbar } from '../components'
import { useLenis } from '@studio-freight/react-lenis'

const Architecture = () => {

    // useLenis(scrollController => {
    //     scrollController.scrollTo(0)
    // }, [])
    
    return (
        <>
            <Navbar />
            <br />
            <ArchitectureList />
        </>
    )
}

export default Architecture