import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import "./ProductList.scss";

const ProductList = ({ products, showRemoveIcon }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showRemoveIcon={showRemoveIcon}
        />
      ))}
    </div>
  );
};

export default ProductList;
