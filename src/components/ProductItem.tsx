import '../styles/ProductItem.css';
import Product from '../interfaces';

const ProductItem: React.FC<Product> = ({_id, name, url, price, description} : Product) => {
  return (
    <div className="product-container">
      <img
        src={url}
        alt="poza"
        width="100px"
        height="100px"
      />
      <div className="details-container">
        <p>{name}</p>
        <p>{price} RON</p>
      </div>
    </div>
  );
}

export default ProductItem;
