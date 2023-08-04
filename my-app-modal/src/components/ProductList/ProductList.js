import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({
  products,
  cart,
  onAddToCart,
  onToggleFavorite,
  onRemoveFromCart,
  showRemoveIcon,
}) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          showRemoveIcon={showRemoveIcon}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
