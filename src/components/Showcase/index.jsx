import { products } from "../../data/products";
import Product from "./Product";
import { add, remove } from "../../helper";

export default function Showcase() {
  // console.log(products)
  return (
    <div
      style={{
        display: "flex",
        gap: "100px",
        flexWrap: "wrap",
      }}>
      {products.map((product, index) => (
        <Product add={add} remove={remove} item={product} key={index} />
      ))}
    </div>
  );
}
