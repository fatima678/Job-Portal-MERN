import React from 'react'
import Navbar from '../components/NAvbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
// import JobCard from '../components/JobCard'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobListing/>
        {/* <JobCard /> */}
        </div>
  )
}

export default Home