import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext)

  const navigate = useNavigate();
  const [count, setCount] = useState(0)
  console.log({item});

  const handleAdd = (quantityToAdd) => {
    console.log('handleAdd(): ', quantityToAdd);
    setCount(quantityToAdd)
    addToCart(item, quantityToAdd)
    // navigate('/cart')
    // navegar al /cart
  }

  useEffect(() => {
    console.log({ count })
  }, [count])

  return (
    <div>
      <h1>Detalle de producto</h1>
      <Item item={item} width='18rem' hiddeButton />
      <ItemCount stock={5} initial='1' onAdd={handleAdd} />
    </div>
  );
}
 
export default ItemDetail;