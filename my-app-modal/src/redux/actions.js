export const setProducts = (products) => ({
  type: "setProducts",
  payload: products,
});

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("/products.json");
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};

export const setModalStatus = (status) => ({
  type: "setModalStatus",
  payload: status,
});

export const toggleFavorite = (product) => {
  return (dispatch, getState) => {
    dispatch({
      type: "toggleFavorites",
      payload: product,
    });

    const favorites = getState().favorites;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
};

export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    dispatch({
      type: "removeFromCart",
      payload: productId,
    });

    const cart = getState().cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  };
};

export const addToCart = (product) => {
  return (dispatch, getState) => {
    dispatch({
      type: "addToCart",
      payload: product,
    });

    const cart = getState().cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  };
};
