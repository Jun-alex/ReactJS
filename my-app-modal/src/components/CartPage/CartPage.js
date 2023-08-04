import React from "react";
import ProductList from "../ProductList/ProductList";
import "./CartPage.scss";

const CartPage = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Корзина</h2>
      <ProductList
        products={cart}
        onRemoveFromCart={onRemoveFromCart}
        showRemoveIcon
      />
    </div>
  );
};

export default CartPage;
