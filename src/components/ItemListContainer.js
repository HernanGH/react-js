import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const products = [
  {id: 0, name: 'asd', username: 'asd', email: 'asdasd'}
]

const mock = () => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000)
  })
  return task
}

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    mock()
      .then(data => {
        console.log(data)
        setItems(data) // actualizo el estado de react
      })
    
  }, [])

  return (
    <div>
      <h3>{greetings}</h3>
      <ItemList items={items} />
    </div>
  );
}
 
export default ItemListContainer;