import '../styles/ProductList.css';
import Product from "../interfaces";
import ProductItem from './ProductItem'

interface ProductProps {
  products: Product[]
}

const ProductList: React.FC<ProductProps> = ({products}: ProductProps) => {
  return (
    <ul className="list-container">
      {
        products.map(product => {
          return (
            <ProductItem
              key={product._id}
              _id={product._id}
              name={product.name}
              url={product.url}
              price={product.price}
              description={product.description}
            />
          );
        })
      }
    </ul>
  );
}

export default ProductList;
