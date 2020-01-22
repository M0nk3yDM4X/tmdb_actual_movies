import React from "react";

import noImage from "../images/no-image.png";

const MovieCard = ({
  index,
  element,
  showModal,
  setShowModal,
  setMovieClicked
}) => {
  return (
    <div
      key={index}
      className="movieCard"
      onClick={() => {
        setShowModal(!showModal);
        setMovieClicked(element);
      }}
    >
      <div className="moviePosterContainer">
        <img
          className={element.poster_path ? "moviePoster" : "noMoviePoster"}
          alt="moviePoster"
          src={
            element.poster_path
              ? "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                element.poster_path
              : noImage
          }
        />
      </div>
      <div className="movieTitleContainer">
        <span className="movieTitle">{element.title}</span>
      </div>
    </div>
  );
};

export default MovieCard;
