const ItemDetail = ({ item }) => {
  console.log({item});

  return (
    <>
      <h1>ItemDetail {item?.name}</h1>
    </>
  );
}
 
export default ItemDetail;