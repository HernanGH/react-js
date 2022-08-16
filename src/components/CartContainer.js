import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { CartContext } from '../context/CartContext';
import Cart from "./Cart";

const USER_DEMO = {
  name: 'coderhouse',
  phone: '112223344',
  email: 'coderhouse@mail.com'
}

const calcTotal = (items) => items.reduce((previous, current) => previous + (current.quantity * Number(current.price)), 0)

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  const handleDelete = (item) => console.log('delete', item);

  const sendOrder = () => {
    const newOrder = {
      buyer: USER_DEMO,
      items: cart,
      total: calcTotal(cart)
    }

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    
    addDoc(orderCollection, newOrder)
      .then(({ id }) => console.log({ id }))
      .catch((error) => console.error(error))
  };

  return (
    <Container>
      <h1>Carrito de compras</h1>
      <Cart items={cart} onDelete={handleDelete} />
      <Button variant="success" onClick={sendOrder}>Finalizar comprar</Button>
    </Container>
  );
}
 
export default CartContainer;