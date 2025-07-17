import { Product } from "./product-data";
import Image from "next/image";

export default function ProductList({products} : {products: Product[]}) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <Image src={'/' + product.imageUrl} alt="Product Image" width={150} height={150} />
          <h2>{product.name}</h2>
          {/* <p>{product.description}</p> */}
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}