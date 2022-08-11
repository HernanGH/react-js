import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: ${(props) => props.width};

  .card-img-top {
    height: 25rem;
    object-fit: cover;
  }
`

const Item = ({ item, width = '20rem', hiddeButton = false }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/item/${item.id}`)
  }
  
  return (
    <StyledCard width={width}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {`Precio: ${item.price}, Categoria: ${item.category}`}
        </Card.Text>
        {!hiddeButton && <Button variant="primary" onClick={handleClick}>Ver detalle</Button>}
      </Card.Body>
    </StyledCard>
  );
}
 
export default Item;