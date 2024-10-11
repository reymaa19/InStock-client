import React from "react";
import Modal from "react-modal";
import { deleteWarehouse } from "../../services/warehouse-api.js";
import { deleteInventoryItem } from "../../services/inventory-api.js";
import "./DeleteModal.scss";

function DeleteModal({ isOpen, closeModal, id, name, type }) {
  Modal.setAppElement("#root");

  async function deleteSelected() {
    if (type === "warehouse") {
      const result = await deleteWarehouse(id);
      if (result.status === 204) closeModal(true);
    } else if (type === "inventory") {
      const result = await deleteInventoryItem(id);
      if (result.status === 204) closeModal(true);
    }

    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Modal"
      className="delete-modal"
      overlayClassName="delete-modal__overlay"
    >
      <div className="delete-modal__wrapper">
        <button
          alt="Delete Icon"
          className="delete-modal__close-button"
          onClick={closeModal}
        />
        <h1 className="delete-modal__page-header">{`Delete ${name} ${type === "warehouse" ? "Warehouse" : "inventory item"}?`}</h1>
        <p className="delete-modal__description">{`Please confirm that you’d like to delete the ${name} from the ${type === "warehouse" ? "list of  warehouses" : "inventory list"}. You won’t be able to undo this action.`}</p>
      </div>
      <div className="delete-modal__wrapper delete-modal__wrapper--options">
        <button
          className="delete-modal__button delete-modal__button--secondary"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          className="delete-modal__button delete-modal__button--primary"
          onClick={deleteSelected}
          onBlur={closeModal}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default DeleteModal;
