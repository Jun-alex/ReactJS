import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "../ProductList/ProductList";

import { removeFromCart } from "../../redux/actions";

import "./CartPage.scss";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div>
      <ProductList
        products={cart}
        showRemoveIcon
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default CartPage;
