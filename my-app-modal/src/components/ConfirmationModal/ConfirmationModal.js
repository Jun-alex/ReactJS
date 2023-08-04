import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./ConfirmationModal.scss";

const ConfirmationModal = ({ product, isOpen, onCancel, onConfirm }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCancel();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <h2 className="title-modal">
          Подтверждение удаления товара из корзины
        </h2>
        <span className="close-modal" onClick={onCancel}>
          &times;
        </span>
        <p className="text-modal">
          Вы действительно хотите удалить товар "{product.name}" из корзины?
        </p>
        <div className="actions">
          <button className="ok_close-modal" onClick={onConfirm}>
            Ok
          </button>
          <button className="no_close-modal" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
