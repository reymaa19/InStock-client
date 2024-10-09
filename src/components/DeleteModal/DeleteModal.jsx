import React from "react";
import Modal from "react-modal";
import closeIcon from "../../assets/images/icons/action/close-24px.svg";
import "./DeleteModal.scss";

const DeleteModal = ({ id }) => {
  return <Modal isOpen={isOpen} onRequestClose={closeModal}></Modal>;
};

export default DeleteModal;
