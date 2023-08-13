import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../ProductList/ProductList";

import { toggleFavorite } from "../../redux/actions";

import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleToggleFavorite = (product) => {
    dispatch(toggleFavorite(product));
  };

  return (
    <div>
      <ProductList
        products={favorites}
        showRemoveIcon
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default FavoritesPage;
