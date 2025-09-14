import React from 'react'
import Navbar from '../components/NAvbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'


function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobListing/>
        <AppDownload/>
      
        </div>
  )
}

export default Home