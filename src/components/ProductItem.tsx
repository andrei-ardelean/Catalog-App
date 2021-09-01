import '../styles/ProductItem.css';
import Product from '../interfaces';
import { Button, ButtonGroup, Card, CardHeader, CardMedia, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
});

const ProductItem: React.FC<Product> = ({_id, name, url, price, description, onDelete, onEdit} : Product) => {

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Link
        to={`/products/${_id}`}>
        <CardMedia
          className={classes.media}
          image={url}
          //image="/src/assets/bormasina.jpeg"
          //image="/Users/ardeleana/Desktop/Tutorials/react/catalog-app/src/assets/bormasina.jpeg"
        />
      </Link>
      <CardHeader
        title={name}
        subheader={`${price} RON`}
        action={
          <ButtonGroup
          fullWidth
          size="medium"
          variant="contained"
          disableElevation
          disableRipple>
            <Button
              color="primary"
              style={{borderRadius: 2}}
              onClick={() => onEdit({ _id, name, url, price, description })}>
                <EditIcon/>
            </Button>
            <Button
              color="secondary"
              style={{borderRadius: 2}}
              onClick={() => onDelete(_id)}>
                <DeleteIcon/>
            </Button>
        </ButtonGroup>
        }
      />
    </Card>

    // <div className="product-container">
    //   <div className="product-card">
    //     <Link
    //       to={`/products/${_id}`}>
    //         <img
    //           //src="data:image/jpeg;base64,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"
    //           //src={url}
    //           src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    //           alt="produs"
    //         />
    //     </Link>
    //     <div className="details-container">
    //       <p>{name}</p>
    //       <p>{price} RON</p>
    //     </div>
    //   </div>
    //   <ButtonGroup
    //     fullWidth
    //     size="medium"
    //     variant="contained"
    //     disableElevation
    //     disableRipple>
    //       <Button
    //         color="primary"
    //         style={{borderRadius: 0}}
    //         onClick={() => onEdit({ _id, name, url, price, description })}>
    //           <EditIcon/>
    //       </Button>
    //       <Button
    //         color="secondary"
    //         style={{borderRadius: 0}}
    //         onClick={() => onDelete(_id)}>
    //           <DeleteIcon/>
    //       </Button>
    //   </ButtonGroup>
    // </div>
  );
}

export default ProductItem;
