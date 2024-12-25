import React from 'react'
import Navbar from '../components/Navbar'
import About1 from '../components/About1'
import Service1 from '../components/Service1'
import Work1 from '../components/Work1'
import Project1 from '../components/Project1'

const Home = () => {
  return (
    <div>
        <Navbar />
        <About1 />
        <Service1/>
        <Work1/>
        <Project1/>
    </div>
  )
}

export default Home
