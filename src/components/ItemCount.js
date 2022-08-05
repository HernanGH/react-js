import React, {useEffect, useState, } from 'react'
import styled from 'styled-components';

const StyledCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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
    <StyledCount>
      <div>
        <button disabled={count <= 1} onClick={handleSubtract}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={handleAdd}>+</button>
      </div>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al  Carrito
        </button>
      </div>
    </StyledCount>
  )
}

export default ItemCount
