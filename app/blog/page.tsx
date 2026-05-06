import React from 'react'
import BlogBody from './components/BlogBody'
import BlogHero from './components/BlogHero'
import BlogOverlay from './components/BlogOverlay'
import BlogFooter from './components/BlogFooter'

const page = () => {
  return (
    <section className='bg-[#F7F1D7]'>
      <BlogHero />
      <BlogBody />
      <BlogOverlay />
      <BlogFooter />
    </section>
  )
}

export default page
