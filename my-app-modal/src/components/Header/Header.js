import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import "./Header.scss";

class Header extends React.PureComponent {
  render() {
    const { cartCount, favoritesCount } = this.props;

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
            <span>{cartCount}</span>
          </Link>
          <Link to="/favorites">
            <FaStar className="header-icon" />
            <span>{favoritesCount}</span>
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
  favoritesCount: PropTypes.number.isRequired,
};

Header.defaultProps = {
  cartCount: 0,
  favoritesCount: 0,
};

export default Header;
