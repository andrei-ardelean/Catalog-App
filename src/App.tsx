import "./App.css";
import React, { useState } from "react";
import AddEditPopup from "./components/features/AddEditPopup";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Product from "./interfaces";
import Header from "./components/features/Header";
import ProductList from "./components/product/ProductList";
import ProductPage from "./components/product/ProductPage";
import Notification, { NotifyType } from "./components/features/Notification";
import { useCallback } from "react";

const App: React.FC = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>(
    undefined
  );
  const [notify, setNotify] = useState<NotifyType>({
    isOpen: false,
    message: "",
    type: undefined,
  });

  const handleEditBtn = useCallback((product: Product): void => {
    setCurrentProduct(product);
    setOpenPopup(true);
  }, []);

  const handleSetNotify = useCallback((notify: NotifyType): void => {
    setNotify(notify);
  }, []);

  const handleResetCurrentProduct = (): void => {
    setCurrentProduct(undefined);
    setOpenPopup(false);
  };

  const handleSetOpenPopup = useCallback(
    (openPopup: boolean): void => {
      setOpenPopup(openPopup);
    },
    [setOpenPopup]
  );

  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/products"
          render={() => (
            <>
              <Header openPopup={openPopup} setOpenPopup={handleSetOpenPopup} />
              {openPopup && (
                <AddEditPopup
                  product={currentProduct}
                  title={`${
                    currentProduct === undefined
                      ? "Add a new product"
                      : "Edit product"
                  }`}
                  openPopup={openPopup}
                  handleResetCurrentProduct={handleResetCurrentProduct}
                  setNotify={setNotify}
                />
              )}
              <Notification
                notify={notify}
                setNotify={setNotify}
              ></Notification>
              <ProductList
                handleEditBtn={handleEditBtn}
                setNotify={handleSetNotify}
              />
            </>
          )}
        />
        <Route path="/products/:id" component={ProductPage} />
        <Redirect to="/products" />
      </div>
    </Router>
  );
};

export default App;
