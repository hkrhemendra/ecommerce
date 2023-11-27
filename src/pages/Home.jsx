import React from 'react'
import Carousel from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <FeaturedProducts/>
      <Products/>
    </div>
  )
}

export default Home
