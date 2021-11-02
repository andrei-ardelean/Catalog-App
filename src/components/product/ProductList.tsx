import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { NotifyType } from "../features/Notification";
import {
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import Product from "../../interfaces";

interface ProductListProps {
  handleEditBtn: (product: Product) => void;
  setNotify: (notify: NotifyType) => void;
}

const useStyles = makeStyles({
  gridContainer: {
    padding: "30px 20px",
  },
});

const WrappedProductList: React.FC<ProductListProps> = ({
  handleEditBtn,
  setNotify,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { deleteProduct, getNameOfProducts } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const products = useSelector((state: State) => state.products);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteBtn = (_id: string): void => {
    deleteProduct(_id);
    setNotify({
      isOpen: true,
      message: "Deleted successfully",
      type: "success",
    });
  };

  const fetchProductsName = () => {
    try {
      getNameOfProducts(products.length);
      setIsLoading(false);
    } catch (error) {
      console.log("Error while fetching");
    }
  };

  useEffect(() => {
    fetchProductsName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gridContainer = useMemo(() => {
    return (
      <Grid container spacing={2} className={classes.gridContainer}>
        {products.map((product) => {
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
        })}
      </Grid>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : products.length > 0 ? (
        gridContainer
      ) : (
        <div style={{ margin: 20 }}>
          <Typography variant="h4" gutterBottom>
            No products to show
          </Typography>
        </div>
      )}
    </>
  );
};

const ProductList = React.memo(WrappedProductList);

export default ProductList;
