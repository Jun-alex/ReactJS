import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

import {
  addToCart,
  setModalStatus,
  toggleFavorite,
  removeFromCart,
} from "../../redux/actions";

import "./ProductCard.scss";

const ProductCard = ({ product, showRemoveIcon }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  const isInCart = cart.some((item) => item.id === product.id);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [selectedRemoveProduct, setSelectedRemoveProduct] = useState(null);

  const handleAddToCart = () => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  const handleRemoveFromCart = () => {
    setSelectedRemoveProduct(product);
    setIsRemoveModalOpen(true);
  };

  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };

  const handleConfirmRemoveFromCart = () => {
    dispatch(removeFromCart(selectedRemoveProduct.id));
    closeRemoveModal();
  };

  const handleConfirmAddToCart = () => {
    dispatch(addToCart(product));
    closeModal();
  };

  const modalContent = (
    <>
      <h2 className="title-modal">Подтверждение добавления в корзину</h2>
      <span className="close-modal" onClick={closeModal}>
        &times;
      </span>
      <p className="text-modal">
        Вы действительно хотите добавить товар "{product.name}" в корзину?
      </p>
      <div className="actions">
        <button
          className="add-cart add-to-cart"
          onClick={handleConfirmAddToCart}
        >
          Ok
        </button>
        <button className="cancel" onClick={closeModal}>
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
      <Button buttonText="Add to cart" handleButtonClick={handleAddToCart} />
      <span
        onClick={handleToggleFavorite}
        className={
          isFavorite ? "favorite-icon favorite-icon-active" : "favorite-icon"
        }
      >
        <FaStar className={isFavorite ? "favorite-icon-active" : ""} />
      </span>

      {showRemoveIcon && isInCart && (
        <span className="remove-from-cart-icon" onClick={handleRemoveFromCart}>
          &times;
        </span>
      )}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {modalContent}
          </div>
        </div>
      )}

      {isRemoveModalOpen && (
        <div className="modal" onClick={closeRemoveModal}>
          <div
            className="modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <h2 className="title-modal">
              Подтверждение удаления товара из корзины
            </h2>
            <span className="close-modal" onClick={closeRemoveModal}>
              &times;
            </span>
            <p className="text-modal">
              Вы действительно хотите удалить товар "
              {selectedRemoveProduct.name}" из корзины?
            </p>
            <div className="actions">
              <button
                className="ok_close-modal"
                onClick={handleConfirmRemoveFromCart}
              >
                Ok
              </button>
              <button className="no_close-modal" onClick={closeRemoveModal}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {showRemoveIcon && isInCart && (
        <ConfirmationModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onCancel={closeModal}
          onConfirm={() => {
            dispatch(removeFromCart(selectedProduct.id));
            closeModal();
          }}
        />
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  showRemoveIcon: PropTypes.bool.isRequired,
};

export default ProductCard;
