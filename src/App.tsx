import './App.css'
import React, { useState } from 'react';
import AddProductPopup from './components/AddEditPopup';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Product from './interfaces';

const App: React.FC = () => {

  const [openPopup, setOpenPopup] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined);

  const handleEditBtn = (product: Product) => {
    setCurrentProduct(product);
    setOpenPopup(true);
  }

  const handleResetCurrentProduct = () => {
      setCurrentProduct(undefined);
      setOpenPopup(false);
  }

  return (
    <Router>
      <div className="App">
        <Route exact path="/products" render={() => (
          <>
            <Header openPopup={openPopup} setOpenPopup={setOpenPopup}/>
            {
              openPopup && 
                <AddProductPopup
                  product={currentProduct}
                  title={`${currentProduct === undefined
                          ? 'Add a new product'
                          : 'Edit product'
                        }`}
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
                  handleResetCurrentProduct={handleResetCurrentProduct}/>
            }
            <ProductList handleEditBtn={handleEditBtn}/>
          </>
        )}/>
        <Route path="/products/:id" component={ProductPage}/>
        <Redirect to="/products" />
      </div>
    </Router>
  );
}

export default App;
