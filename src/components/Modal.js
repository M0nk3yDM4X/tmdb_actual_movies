import React from "react";

const Modal = ({ showModal, setShowModal, movieClicked }) => {
  return (
    <>
      {showModal === true && (
        <div
          className="backgroundModal"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <div className="modalCard">
            <span>{movieClicked.title}</span>
            <span>{movieClicked.release_date}</span>
            <p>{movieClicked.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
