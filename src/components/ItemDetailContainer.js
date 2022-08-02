import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
  const { productId } = useParams()
  console.log({ productId })
  const [item, setItem] = useState() // primeros segundos item es undefined
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('aca el component ya esta en el dom (montado)');
    setLoading(true)
    getItem(productId)
      .then((product) => {
        setItem(product) // 2 seg item tiene la data
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [productId])

  return (
    <>
      {loading && <Spinner animation="grow" />}
      <ItemDetail item={item} />
    </>
  );
}
 
export default ItemDetailContainer;