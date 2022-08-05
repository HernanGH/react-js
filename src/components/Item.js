import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ item, width = '10rem', hiddeButton = false }) => {
  return (
    <Card style={{ width }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150/92c952" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {`Precio: ${item.price}, Categoria: ${item.category}`}
        </Card.Text>
        {!hiddeButton && <Button variant="primary">Ver detalle</Button>}
      </Card.Body>
    </Card>
  );
}
 
export default Item;