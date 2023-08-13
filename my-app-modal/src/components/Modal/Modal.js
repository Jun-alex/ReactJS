import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalStatus } from "../../redux/actions";

import "./Modal.scss";

const Modal = ({ children }) => {
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(setModalStatus(true));
  };

  const closeModal = () => {
    dispatch(setModalStatus(false));
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to cart</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {children}
            <button onClick={closeModal}>Ok</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
