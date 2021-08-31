import '../styles/ProductPage.css';
import { Link, RouteComponentProps } from "react-router-dom";
import { useSelector } from 'react-redux';
import { State } from '../state';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

type Params = {id: string}

const ProductPage: React.FC<RouteComponentProps<Params>> = ({ match }: RouteComponentProps<Params>) => {
  
  const id = match.params.id;
  const products = useSelector((state: State) => state.products);
  const currentProduct = products.filter(prod => prod._id === id)[0];

  return (
    <div className="container">
      <div className="header">
        <Link
          to="/products"
          style={{textDecoration:'none'}}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<ArrowBackIcon/>}>
              RETURN
          </Button>
        </Link>
        <h1 style={{flexGrow:1, textAlign:"center"}}>{currentProduct.name}</h1>
      </div>
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt={`Product with id=${id}`}
        />
        <div className="price-div">
          <span style={{fontWeight:'bold'}}>Price: </span>
          <span>{currentProduct.price} RON</span>
        </div>
        <div className="description-div">
          <span style={{fontWeight:'bold'}}>Description: </span>
          <span>{currentProduct.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
