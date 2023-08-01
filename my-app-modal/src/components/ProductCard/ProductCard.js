import React from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./ProductCard.scss";

class ProductCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.getFavoriteStatusFromLocalStorage(),
      isModalOpen: false,
      isAddedToCart: false,
    };
  }

  getFavoriteStatusFromLocalStorage = () => {
    const { product } = this.props;
    const favoritesData = JSON.parse(localStorage.getItem("favorites")) || [];
    return favoritesData.some((item) => item.id === product.id);
  };

  handleAddToCart = () => {
    const { product, cart } = this.props;
    const isInCart = cart.some((item) => item.id === product.id);

    if (isInCart) {
      this.setState({ isAddedToCart: true });
    } else {
      this.setState({ isModalOpen: true });
    }
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleToggleFavorite = () => {
    this.setState(
      (prevState) => ({
        isFavorite: !prevState.isFavorite,
      }),
      () => {
        const { product, onToggleFavorite } = this.props;
        onToggleFavorite(product, this.state.isFavorite);
        this.updateFavoriteStatusInLocalStorage();
      }
    );
  };

  updateFavoriteStatusInLocalStorage = () => {
    const { product } = this.props;
    const favoritesData = JSON.parse(localStorage.getItem("favorites")) || [];

    if (this.state.isFavorite) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favoritesData, product])
      );
    } else {
      const updatedFavorites = favoritesData.filter(
        (item) => item.id !== product.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  handleConfirmAddToCart = () => {
    const { product, onAddToCart } = this.props;
    onAddToCart(product);
    this.setState({ isModalOpen: false });
  };

  render() {
    const { product } = this.props;
    const { isFavorite, isModalOpen } = this.state;

    const modalContent = (
      <>
        <h2 className="title-modal">Подтверждение добавления в корзину</h2>
        <span className="close-modal" onClick={this.closeModal}>
          &times;
        </span>
        <p className="text-modal">
          Вы действительно хотите добавить товар "{product.name}" в корзину?
        </p>
        <div className="actions">
          <button
            className="add-cart add-to-cart"
            onClick={this.handleConfirmAddToCart}
          >
            Ok
          </button>
          <button className="cancel" onClick={this.closeModal}>
            Cancel
          </button>
        </div>
      </>
    );

    return (
      <div className="product-card">
        <h3 className="name-product">{product.name}</h3>
        <p className="price-product">Цена: {product.price}</p>
        <img className="img-product" src={product.image} alt={product.name} />

        <Button
          buttonText="Add to cart"
          handleButtonClick={this.handleAddToCart}
        />
        <span
          onClick={this.handleToggleFavorite}
          className={
            isFavorite ? "favorite-icon favorite-icon-active" : "favorite-icon"
          }
        >
          <FaStar className={isFavorite ? "favorite-icon-active" : ""} />
        </span>

        {isModalOpen && (
          <div className="modal"
          onClick={this.closeModal}>
            <div className="modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}>{modalContent}</div>
          </div>
        )}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  product: {
    id: 0,
    name: "",
    price: 0,
    image: "",
    article: "",
    color: "",
  },
};

export default ProductCard;
