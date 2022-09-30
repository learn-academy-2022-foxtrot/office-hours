import React, { useState } from 'react'
import MenuComponent from './components/MenuComponent'
import OrderComponent from './components/OrderComponent'

const App = () => {
  const [menu, setMenu] = useState([
    {flavor: "vanilla", price: 3.50, ordered: false, image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Vanilla_Ice_Cream_Cone_at_Camp_Manitoulin.jpg"},
    {flavor: "avocado", price: 4, ordered: false, image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Vanilla_Ice_Cream_Cone_at_Camp_Manitoulin.jpg"},
    {flavor: "salted caramel", price: 5, ordered: false, image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Vanilla_Ice_Cream_Cone_at_Camp_Manitoulin.jpg"}
  ])

  const filteredMenu = menu.filter(item => item.ordered === true)

  const handleClick = (selectedItem) => {
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }

  return (
    <>
      <h1>Ice Cream</h1>
      <MenuComponent menuItems={menu} handleClick={handleClick}/>
      <OrderComponent filteredItems={filteredMenu}/>
    </>
  )
}

export default App