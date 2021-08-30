import '../styles/ProductList.css';
import Product from "../interfaces";
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State, store } from '../state';

// interface ProductListProps {
//   products: Product[],
//   setProducts: React.Dispatch<React.SetStateAction<Product[]>>
// }

const ProductList = () => {
  const dispatch = useDispatch();
  const {deleteProduct} = bindActionCreators(actionCreators, dispatch);
  const products = useSelector((state: State) => state.products);

  const handleDeleteBtn = (_id: string):void => {
    deleteProduct(_id);
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
