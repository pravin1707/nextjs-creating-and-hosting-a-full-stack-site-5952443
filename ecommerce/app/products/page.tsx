import ProductList from "../ProductList";
import {products} from '../product-data'
export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products}  />
    </div>
  );
}