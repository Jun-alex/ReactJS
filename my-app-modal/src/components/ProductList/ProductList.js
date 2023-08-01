import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss"


const ProductList = ({ products, cart, onAddToCart, onToggleFavorite }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductList;