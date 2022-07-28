import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams()
  console.log({ productId })
  const [item, setItem] = useState() // primeros segundos item es undefined

  useEffect(() => {
    console.log('aca el component ya esta en el dom (montado)');
    getItem(productId)
      .then((product) => {
        setItem(product) // 2 seg item tiene la data
      })
      .catch((error) => console.error(error))
  }, [productId])

  return (
    <ItemDetail item={item} />
  );
}
 
export default ItemDetailContainer;