import React, {useEffect, useState, } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleSubtract = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  useEffect(() => {
      setCount(parseInt(initial));
  },[initial])

  return (
    <>
        <button disabled={count <= 1} onClick={handleSubtract}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={handleAdd}>+</button>
        <div>
          <button disabled={stock <= 0} onClick={() => onAdd(count)}>
            Agregar al  Carrito
          </button>
        </div>
    </>
  )
}

export default ItemCount
