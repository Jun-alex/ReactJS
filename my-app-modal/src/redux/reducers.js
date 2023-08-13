import { combineReducers } from "redux";

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "setProducts":
      return action.payload;
    default:
      return state;
  }
};

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case "setModalStatus":
      return {
        ...state,
        isModalOpen: action.payload.isOpen,
        selectedProduct: action.payload.selectedProduct,
      };
    default:
      return state;
  }
};

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const favoritesReducer = (state = initialFavorites, action) => {
  switch (action.type) {
    case "toggleFavorites":
      if (state.some((item) => item.id === action.payload.id)) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  isModalOpen: modalReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
