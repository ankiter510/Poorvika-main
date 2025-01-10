// import React from 'react'
import Mobile from './Mobile'
import Laptop from './Laptop'
import Slider from './Slider'
import Baneer from './Banner'
import Footer from './Footer'
import Latest from './Latest'

const Home = () => {
  return (
    <div>
      <Baneer />
      <Slider />
      <Latest />
      <Mobile />
      <Laptop />
      <Footer />
    </div>
  )
}

export default Home