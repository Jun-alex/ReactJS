import React from "react";
import ProductList from "../ProductList/ProductList";
import "./FavoritesPage.scss";

const FavoritesPage = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div>
      <h2>Избранное</h2>
      <ProductList
        products={favorites}
        onRemoveFromFavorites={this.handleRemoveFromFavorites}
        showRemoveIcon
      />
    </div>
  );
};

export default FavoritesPage;
