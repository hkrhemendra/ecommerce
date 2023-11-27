import React from 'react'
import Products from '../components/Products'

const Shop = () => {
  return (
    <div className='container'>
      <Products limit={9} />
    </div>
  )
}

export default Shop
