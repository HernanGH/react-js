import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner';
import styled from "styled-components";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const StyledDetail = styled.div`
  display: flex;
  justify-content: center;
`

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [item, setItem] = useState() // primeros segundos item es undefined
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const db = getFirestore()

    const itemRef = doc(db, 'items', productId) 
    setLoading(true)
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data()
          }
          setItem(data)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [productId])

  return (
    <StyledDetail>
      {loading && <Spinner animation="grow" />}
      {item && <ItemDetail item={item} />}
    </StyledDetail>
  );
}
 
export default ItemDetailContainer