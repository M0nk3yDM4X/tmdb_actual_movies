import React from "react";
import "moment/locale/fr";

const Modal = ({ showModal, setShowModal, movieClicked }) => {
  const localDate = new Date(movieClicked.release_date);
  const date = localDate.toLocaleDateString();

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
            <div className="modalCardPoster">
              <img
                className="moviePoster"
                src={
                  "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                  movieClicked.poster_path
                }
              />
            </div>
            <div className="modalCardMovieDetails">
              <div className="modalCardMovieTitle">
                <span>{movieClicked.title}</span>
              </div>
              <div className="modalCardMovieRelease">
                <span>Date de sortie :</span>
                <span>{date}</span>
              </div>
              <div className="modalCardMovieRelease">
                <span>Note :</span>
                <span>{movieClicked.vote_average}</span>
              </div>
              <div className="overviewContainer">
                <span>Description: </span>
                <p>{movieClicked.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
