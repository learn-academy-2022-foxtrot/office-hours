import React from 'react'

const MenuComponent = (props) => {
  console.log(props.menuItems)
  return (
    <>
      <h3>Menu</h3>
      {props.menuItems.map((currentItemObject, index) => {
        return(
          <div key={index}>
            <img src={currentItemObject.image} alt={currentItemObject.flavor} height={100}/>
            <p>{currentItemObject.flavor} : ${currentItemObject.price}</p>
            <button onClick={() => props.handleClick(index)}>Add item</button>
          </div>
        )
      })}
    </>
  )
}

export default MenuComponent