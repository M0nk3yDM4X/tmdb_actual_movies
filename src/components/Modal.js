import React from "react";
import "moment/locale/fr";

import noImage from "../images/no-image.png";

const Modal = ({ showModal, setShowModal, movieClicked }) => {
  const localDate = new Date(movieClicked.release_date);
  const date = localDate.toLocaleDateString();

  return (
    <>
      {showModal === true && (
        <>
          <div className="backgroundModal">
            <div className="modalCard">
              <div className="modalCardPoster">
                <img
                  className={movieClicked.poster_path ? "moviePoster" : null}
                  src={
                    movieClicked.poster_path
                      ? "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                        movieClicked.poster_path
                      : noImage
                  }
                />
              </div>
              <div className="modalCardMovieDetails">
                <div className="modalCardCross">
                  <div
                    onClick={() => {
                      setShowModal(!showModal);
                    }}
                    className="modalCardCrossContainer"
                  >
                    <span>X</span>
                  </div>
                </div>
                <div className="modalCardMovieTitle">
                  <span>{movieClicked.title}</span>
                </div>
                <div className="modalCardMovieRelease">
                  <span>Date de sortie :</span>
                  <span>{date}</span>
                </div>
                <div className="modalCardMovieRelease">
                  <span>Note :</span>
                  {movieClicked.vote_count === 0 ? (
                    <span>Aucune note n'a été attribuée pour ce film</span>
                  ) : (
                    <span>{movieClicked.vote_average}</span>
                  )}
                </div>
                <div className="overviewContainer">
                  <span>Description: </span>
                  {movieClicked.overview ? (
                    <p>{movieClicked.overview}</p>
                  ) : (
                    <p>
                      nous sommes désolé, aucune description n'est disponible
                      pour ce film
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
