import Product from "../interfaces";
import '../styles/ProductPage.css';

const ProductPage: React.FC<Product> = ({_id, name, url, price, description}: Product) => {
  return (
    <div className="container">
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="_id"
      />
      <div className="name-div">
        <h1>{name}</h1>
      </div>
      <div className="description-div">
        Description: <p>{description}</p>
      </div>
      <div className="price-div">
        Price: {price} RON
      </div>
    </div>
  );
}

export default ProductPage;
