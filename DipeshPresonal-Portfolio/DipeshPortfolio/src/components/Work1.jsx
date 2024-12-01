import React from 'react'
import "./Work1.css";
import Works from './Works'
const Work1 = () => {
  return (
    <section className='work section' id='portfolio'>
     <h2 className='section__title'>My Work</h2>
     <span className='section__Subtitle'>Most Recent Work</span>
     <Works/>
    </section>
  )
}

export default Work1