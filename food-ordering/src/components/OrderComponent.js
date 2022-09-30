import React from 'react'

const OrderComponent = (props) => {
  const subTotal = props.filteredItems.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)

  return (
    <>
      <h3>Your order:</h3>
      {props.filteredItems.map((currentItemObject, index) => {
        return(
          <div key={index}>
            <p>{currentItemObject.flavor}</p>
          </div>
        )
      })}
      <hr/>
      <p>Subtotal: ${subTotal}</p>
    </>
  )
}

export default OrderComponent