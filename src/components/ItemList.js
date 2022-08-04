import styled from "styled-components";
import Item from "./Item";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`

const ItemList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </List>
  );
}
 
export default ItemList;