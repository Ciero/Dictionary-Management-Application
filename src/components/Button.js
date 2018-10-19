import React from 'react';
import './Dictionary/products.css'

const Button = (props)=> {
  let productNames = props.products.map(p =>p.name) 
  productNames = [...new Set(productNames)]
  const product = productNames.map(function(product) {
    if (product) {
      return (
        <button type="button" 
          onClick={()=>props.clickButton(product)} 
          className="btn dict">
          {product}
        </button>
      )
    }
  });
  return (
    <div>
      <h3 className="searchText">Existing dictionaries: </h3>
      {product}
    </div>)
}
export default Button; 