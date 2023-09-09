import React from 'react'
import '../amazoncheckout.css'
import AmazonSubtotal from './AmazonSubtotal'

const AmazonCheckout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className='checkout-ad' src="amazon-wallpaper1.jpg" />
        <div className="checkout-title">
          <h2>Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout-right">
        <AmazonSubtotal/>
      </div>
    </div>
  )
}

export default AmazonCheckout