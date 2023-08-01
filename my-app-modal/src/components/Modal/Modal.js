import React from "react";
import "./Modal.scss";

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleAddToCart = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { children } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div>
        <button onClick={this.handleAddToCart}>Add to cart</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              {children}
              <button onClick={this.closeModal}>Ok</button>
              <button onClick={this.closeModal}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
