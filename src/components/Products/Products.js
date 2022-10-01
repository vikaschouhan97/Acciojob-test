import './Products.css'
import React from 'react'
import ProductList from './ProductList'

function Products() {
  return (
    <div className='products'>
        <h3 className='products-heading'>Products</h3>
        <ProductList />
    </div>
  )
}

export default Products