import React from "react";
import "./taskModal.css";

function Modal({ onClose }) {
  return (
    <div className="TaskModalBox">
      <textarea
        className="TitleText"
        name="projectTitle"
        defaultValue={"Add a Project Title"}
        rows={1}
      />
      <button className="ModalButton" onClick={onClose}>
        Create
      </button>
    </div>
  );
}
export default Modal;
