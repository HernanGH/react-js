import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const StyledIcon = styled(FaShoppingCart)`
  color: white;
`

const StyledCount = styled.h5`
  color: white;
  padding-top: 4px;
  margin-left: 4px;
`

const CardWidget = () => {
  const { cantInCart } = useContext(CartContext) // 3 Consumir del context atraves del hook useContext
  
  if (cantInCart === 0) {
    return <></>
  }

  return (
    <>
      <StyledIcon />
      <StyledCount>{cantInCart}</StyledCount>
    </>
  );
}
 
export default CardWidget;