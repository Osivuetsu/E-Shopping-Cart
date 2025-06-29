import React from 'react'
import QuantityControl from './QuantityControl';


function Productcard({ product, onAddToCart}) {
  return (
    <div className='product-card'>
        
        <img alt='jj' src= {product.image}/>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-price'>${product.price}</p>
        
        <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  )
}

export default Productcard