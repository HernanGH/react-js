import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: ${(props) => props.width};

  .card-img-top {
    height: 25rem;
    object-fit: cover;
  }
`

const Item = ({ item, width = '20rem', hiddeButton = false }) => {
  return (
    <StyledCard width={width}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {`Precio: ${item.price}, Categoria: ${item.category}`}
        </Card.Text>
        {!hiddeButton && <Button variant="primary">Ver detalle</Button>}
      </Card.Body>
    </StyledCard>
  );
}
 
export default Item;