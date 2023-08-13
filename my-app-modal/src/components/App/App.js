import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import CartPage from "../CartPage/CartPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

import { fetchProducts, setModalStatus } from "../../redux/actions";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList products={products} showRemoveIcon={false} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;