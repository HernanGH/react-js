import { createContext, useState } from 'react';

export const CartContext = createContext({}); // 1

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = () => {}

  const cleanCart = () => {
    setCart([])
  }

  const addToCart = (item, quantity) => {
    // logica de duplicados y consistente
    setCart([...cart, { ...item, quantity }])
  }

  const removeToCart = () => {}

  return (
    <CartContext.Provider
      value={{ 
        cart, isInCart, cleanCart, addToCart,
        removeToCart, cantInCart: cart.length
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
