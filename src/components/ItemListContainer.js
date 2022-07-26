import { useEffect, useState } from "react";
import { createData, deleteData, updateData } from "../utils/api";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([])
  const postId = 4

  useEffect(() => {
    // mock()
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    // createData()
    // const product = {
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 2,
    // }
    // updateData(product)
    // deleteData(postId)
      .then(response => response.json())
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