import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaStar } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  return (
    <header className="header-page">
      <h2 className="title-page">COMFY</h2>
      <ul className="header-links">
        <li className="link-page">
          <Link to="/">Головна</Link>
        </li>
        <li className="link-page">
          <Link to="/cart">Кошик</Link>
        </li>
        <li className="link-page">
          <Link to="/favorites">Вибране</Link>
        </li>
      </ul>
      <div className="header-icon">
        <Link to="/cart">
          <FaShoppingCart className="header-icon" />
          <span>{cart.length}</span>
        </Link>
        <Link to="/favorites">
          <FaStar className="header-icon" />
          <span>{favorites.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
