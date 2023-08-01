import React from "react";
import PropTypes from "prop-types";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import "./Header.scss"

class Header extends React.PureComponent {
  render() {
    const { cartCount, favoritesCount } = this.props;

    return (
      <header className="header-page">
        <h2 className="title-page">COMFY</h2>
        <div className="header-icon">
          <FaShoppingCart className="header-icon" />
          <span>{cartCount}</span>

          <FaStar className="header-icon" />
          <span>{favoritesCount}</span>
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
