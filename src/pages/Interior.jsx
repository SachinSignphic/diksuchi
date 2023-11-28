import React from 'react'
import { ArchitectureGallery, Navbar } from '../components'

const Interior = () => {
  return (
    <>
      <Navbar />
      <br />
      <ArchitectureGallery type={'interior'} title={'INTERIOR'} subtitle={'ELEGANT INTERIORS'} />
    </>
  )
}

export default Interior