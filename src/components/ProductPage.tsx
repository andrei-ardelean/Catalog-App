import { Link, RouteComponentProps } from "react-router-dom";
import { useSelector } from 'react-redux';
import { State } from '../state';
import { Button, Card, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

type Params = {id: string}

const useStyles = makeStyles({
  root: {
    width: 700,
    margin: 'auto'
  },
  media: {
    height: 500,
    paddingTop: '100%',
  },
  span: {
    fontWeight: 'bold',
  }
});

const ProductPage: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const classes = useStyles();
  
  const id = match.params.id;
  const products = useSelector((state: State) => state.products);
  const currentProduct = products.filter(prod => prod._id === id)[0];

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader 
        action={
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
        }
        title={currentProduct.name}
        titleTypographyProps={{variant:'h4'}}
      />
      <CardMedia
        className={classes.media}
        image={currentProduct.url}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          <span className={classes.span}>Price:</span> {currentProduct.price} RON
        </Typography>
        <Typography variant="h5" gutterBottom>
          <span className={classes.span}>Description:</span> {currentProduct.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductPage;
