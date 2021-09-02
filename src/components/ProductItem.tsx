import Product from '../interfaces';
import { Button, ButtonGroup, Card, CardActions, CardHeader, CardMedia, makeStyles } from '@material-ui/core';
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

const ProductItem: React.FC<Product> = ({_id, name, url, price, description, onDelete, onEdit}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Link
        to={`/products/${_id}`}>
        <CardMedia
          className={classes.media}
          image={url}
        />
      </Link>
      <CardHeader
        title={name}
        subheader={`${price} RON`}
      />
      <CardActions>
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
      </CardActions>
    </Card>
  );
}

export default ProductItem;
