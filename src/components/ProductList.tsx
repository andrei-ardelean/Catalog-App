import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { NotifyType } from './Notification';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Product from '../interfaces';

interface ProductListProps {
  handleEditBtn: (product: Product) => void
  setNotify: React.Dispatch<React.SetStateAction<NotifyType>>
}

const useStyles = makeStyles({
  gridContainer: {
    padding: '30px 20px',
  }
});

const ProductList: React.FC<ProductListProps> = ({handleEditBtn, setNotify}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {deleteProduct} = bindActionCreators(actionCreators, dispatch);
  const products = useSelector((state: State) => state.products);

  const handleDeleteBtn = (_id: string):void => {
    deleteProduct(_id);
    setNotify({
      isOpen: true,
      message: 'Deleted successfully',
      type: 'success'
    })
  }

  return (
    <>
      {
        products.length > 0
          ? (
            <Grid container spacing={2} className={classes.gridContainer}>
              {
                products.map(product => {
                  return (
                    <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                      <ProductItem
                        _id={product._id}
                        name={product.name}
                        url={product.url}
                        price={product.price}
                        description={product.description}
                        onDelete={handleDeleteBtn}
                        onEdit={handleEditBtn}
                    />
                    </Grid>
                  );
                })
              }
              </Grid>
            )
          : (
            <div style={{margin: 20}}>
              <Typography variant="h4" gutterBottom>
                No products to show
              </Typography>
            </div>
          )
      }
    </>
  );
}

export default ProductList;
