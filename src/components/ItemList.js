import Item from "./Item";

const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
 
export default ItemList;