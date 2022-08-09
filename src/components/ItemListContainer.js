import { useEffect, useState } from "react";
import { createData, deleteData, fetchProducts, updateData } from "../utils/api";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const postId = 4

  useEffect(() => {
    fetchProducts()
      .then(data => {
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