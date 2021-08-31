import '../styles/ProductItem.css';
import Product from '../interfaces';
import { Button, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const ProductItem: React.FC<Product> = ({_id, name, url, price, description, onDelete, onEdit} : Product) => {
  return (
    <div className="product-container">
      <div className="product-card">
        <Link
          to={`/products/${_id}`}>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="produs"
            />
        </Link>
        <div className="details-container">
          <p>{name}</p>
          <p>{price} RON</p>
        </div>
      </div>
      <ButtonGroup
        fullWidth
        size="medium"
        variant="contained"
        disableElevation
        disableRipple>
          <Button
            color="primary"
            style={{borderRadius: 0}}
            onClick={() => onEdit({ _id, name, url, price, description })}>
              <EditIcon/>
          </Button>
          <Button
            color="secondary"
            style={{borderRadius: 0}}
            onClick={() => onDelete(_id)}>
              <DeleteIcon/>
          </Button>
      </ButtonGroup>
    </div>
  );
}

export default ProductItem;
