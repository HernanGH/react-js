import { useEffect, useState } from "react";
import { createData, deleteData, fetchProducts, updateData } from "../utils/api";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
  const { category } = useParams()
  console.log(category)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const postId = 4


  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, 'items')
      getDocs(itemsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setItems(data)
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (category) {
      const db = getFirestore()
  
      const itemsCollectionQuery = query(
        collection(db, 'items'),
        where('category', '==', category)
      )

      getDocs(itemsCollectionQuery)
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          setItems(data)
        })
        .catch((error) => console.error(error))
    }
  }, [category])

  return (
    <div>
      <h3>{greetings}</h3>
      <ItemList items={items} />
    </div>
  );
}
 
export default ItemListContainer;