import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";

import CartPage from "../CartPage/CartPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

import "./App.scss";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      favorites: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("/products.json");
      const data = await response.json();
      this.setState({ products: data });
      this.loadCartAndFavorites();
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  }

  loadCartAndFavorites = () => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const favoritesData = JSON.parse(localStorage.getItem("favorites"));
    this.setState({
      cart: cartData || [],
      favorites: favoritesData || [],
    });
  };

  handleAddToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  handleToggleFavorite = (product, isFavorite) => {
    if (isFavorite) {
      // Добавляем выбранный товар
      this.setState((prevState) => ({
        favorites: [...prevState.favorites, product],
      }));
    } else {
      // Удаляем выбранный товар
      this.setState((prevState) => ({
        favorites: prevState.favorites.filter((item) => item.id !== product.id),
      }));
    }
  };

  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
  }

  //Код для корзины
  handleRemoveFromCart = (product) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== product.id),
    }));
  };

  render() {
    const { products, cart, favorites } = this.state;

    return (
      <Router>
        <div className="app">
          <Header cartCount={cart.length} favoritesCount={favorites.length} />
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  products={products}
                  cart={[]}
                  showRemoveIcon={false}
                  onAddToCart={this.handleAddToCart}
                  onToggleFavorite={this.handleToggleFavorite}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <ProductList
                  products={cart}
                  cart={cart}
                  showRemoveIcon
                  onAddToCart={this.handleAddToCart}
                  onToggleFavorite={this.handleToggleFavorite}
                  onRemoveFromCart={this.handleRemoveFromCart}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <ProductList
                  products={favorites}
                  cart={cart}
                  onAddToCart={this.handleAddToCart}
                  onToggleFavorite={this.handleToggleFavorite}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
