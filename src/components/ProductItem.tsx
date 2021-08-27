import '../styles/ProductItem.css';
import Product from '../interfaces';

const ProductItem: React.FC<Product> = ({_id, name, url, price, description, onDelete} : Product) => {

  const handleGotoPageBtn = ():void => {
    //todo
  }

  return (
    <div className="product-container">
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="poza"
        />
        <div className="details-container">
          <p>{name}</p>
          <p>{price} RON</p>
        </div>
      </div>
      <button
        className="goto-page-btn"
        onClick={handleGotoPageBtn}
      >
          GO
      </button>
      <button
        className="delete-btn"
        onClick={(id) => onDelete(_id)}
      >
        X
      </button>
    </div>
  );
}

export default ProductItem;
