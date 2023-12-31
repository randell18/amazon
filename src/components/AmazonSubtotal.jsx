import React from 'react'
import '../amazonsubtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from '../reducer'

const AmazonSubtotal = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type="checkbox" />This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default AmazonSubtotal