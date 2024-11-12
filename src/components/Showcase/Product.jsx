export default function Product({ add, remove, item }) {
  const { id, name, price, amountLeft, img } = item;
  // console.log(props);
  return (
    <div
      key={id}
      style={{
        border: "1px solid",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{amountLeft}</p>
      <img src={img} alt="" style={{ width: "250px" }} />
      <button onClick={() => add(id)}>Add</button>
      <button onClick={() => remove(id)}>Remove</button>
    </div>
  );
}
