import Table from 'react-bootstrap/Table';
import { BsTrash } from "react-icons/bs";
import styled from 'styled-components';

const StyledBsTrash = styled(BsTrash)`
  color: red;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`


const Cart = ({ items, onDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio Unitario</th>
        <th>Subtotal</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.price} $</td>
          <td>{item.price * item.quantity} $</td>
          <td>
            <StyledBsTrash onClick={() => onDelete(item)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
 
export default Cart;
