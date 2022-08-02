import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)
  console.log({item});

  const handleAdd = (quantityToAdd) => {
    console.log('handle add: ', quantityToAdd);
    setCount(quantityToAdd)
    console.log(count);
    navigate('/cart')
    // navegar al /cart
  }

  return (
    <>
      <h1>ItemDetail {item?.name}</h1>
      <ItemCount stock={5} initial='1' onAdd={handleAdd} />
    </>
  );
}
 
export default ItemDetail;