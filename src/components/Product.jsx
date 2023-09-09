import React from 'react'
import '../product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id,title,image,price }) => {
  const [{basket}, dispatch] = useStateValue()
  console.log('This is the basket >>>', basket)
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      }
    })
  }
  return (
    <div className='product'>
        <div className="product-info">
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                <p></p>
            </div>
            <img className='product-img' src={image} alt="" />
        </div>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product