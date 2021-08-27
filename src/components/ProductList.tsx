import '../styles/ProductList.css';
import Product from "../interfaces";
import ProductItem from './ProductItem'

interface ProductListProps {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const ProductList: React.FC<ProductListProps> = ({products, setProducts}) => {

  const handleDeleteBtn = (_id: string):void => {
    setProducts(
      products.filter(product => product._id !== _id)
    );
  }

  return (
    <ul className="list-container">
      {
        products.length > 0
          ? (products.map(product => {
              return (
                <ProductItem
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  url={product.url}
                  price={product.price}
                  description={product.description}
                  onDelete={handleDeleteBtn}
                />
              );
            }))
          : 'No products to show'
      }
    </ul>
  );
}

export default ProductList;
