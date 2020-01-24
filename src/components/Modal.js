import React from "react";
import "./Modal.css";
import "moment/locale/fr";

import noImage from "../images/no-image.png";

const Modal = ({ showModal, setShowModal, movieClicked }) => {
  const localDate = new Date(movieClicked.release_date);
  const date = localDate.toLocaleDateString();

  const poster = movieClicked.poster_path;
  const title = movieClicked.title;
  const voteCount = movieClicked.vote_count;
  const rating = movieClicked.vote_average;

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal === true && (
        <>
          <div className="backgroundModal">
            <div className="modalCard">
              <div className="modalCardPoster">
                <img
                  className={poster ? "moviePoster" : null}
                  alt="movie_poster"
                  src={
                    poster
                      ? "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                        poster
                      : noImage
                  }
                />
              </div>
              <div className="modalCardMovieDetails">
                <div className="modalCardCross">
                  <div onClick={closeModal} className="modalCardCrossContainer">
                    <span>X</span>
                  </div>
                </div>
                <div className="modalCardMovieTitle">
                  <span>{title}</span>
                </div>
                <div className="modalCardMovieReleaseAndRating">
                  <span className="modalCardDetail">Date de sortie :</span>
                  <span>{date}</span>
                </div>
                <div className="modalCardMovieReleaseAndRating">
                  <span className="modalCardDetail">Note :</span>
                  {voteCount === 0 ? (
                    <span>Aucune note n'a été attribuée pour ce film</span>
                  ) : (
                    <span>{rating} / 10</span>
                  )}
                </div>
                <div className="overviewContainer">
                  <span className="modalCardDetail">Description: </span>
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
