import '../styles/ProductItem.css';
import Product from '../interfaces';
import { Button, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const ProductItem: React.FC<Product> = ({_id, name, url, price, description, onDelete} : Product) => {

  const handleGotoPageBtn = ():void => {
    //todo
    alert('go to product page');
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
      <div className="buttons">
        
      </div>
      <ButtonGroup
        fullWidth
        size="medium"
        variant="contained"
        disableElevation
        disableRipple
        style={{borderRadius: 0}}>
        <Button
          color="primary"
          style={{borderRadius: 0}}
          endIcon={<KeyboardArrowRightIcon/>}
          onClick={handleGotoPageBtn}>
            GO
        </Button>
        <Button
          color="secondary"
          style={{borderRadius: 0}}
          endIcon={<DeleteIcon/>}
          onClick={() => onDelete(_id)}>
            DELETE
        </Button>
      </ButtonGroup>
      
    </div>
  );
}

export default ProductItem;
