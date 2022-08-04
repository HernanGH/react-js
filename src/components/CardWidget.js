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
  const { cantInCart } = useContext(CartContext)
  return (
    <>
      <StyledIcon />
      <StyledCount>{cantInCart}</StyledCount>
    </>
  );
}
 
export default CardWidget;