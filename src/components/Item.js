import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150/92c952" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {`Usuario: ${item.username}, Mail: ${item.email}`}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
        {/* hola{' '}<span>chau</span> */}
      </Card.Body>
    </Card>
  );
}
 
export default Item;