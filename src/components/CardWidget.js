import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`


const CardWidget = () => {
  const { cantInCart } = useContext(CartContext) // 3 Consumir del context atraves del hook useContext
  const navigate = useNavigate()

  if (cantInCart === 0) {
    return <></>
  }

  const handleClick = () => navigate('/cart')

  return (
    <Wrapper onClick={handleClick}>
      <StyledIcon />
      <StyledCount>{cantInCart}</StyledCount>
    </Wrapper>
  );
}
 
export default CardWidget;