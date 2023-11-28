import React from 'react'
import { ArchitectureGallery, Menu, Navbar } from '../components'

const Architecture = () => {
    return (
        <>
            <Navbar />
            <br />
            <ArchitectureGallery type={'architecture'} title={'ARCHITECTURE'} subtitle={'ASTONISHING DESIGNS'} />
        </>
    )
}

export default Architecture