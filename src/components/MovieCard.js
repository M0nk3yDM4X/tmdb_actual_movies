import React from "react";
import "./MovieCard.css";

import noImage from "../images/no-image.png";

const MovieCard = ({
  index,
  element,
  showModal,
  setShowModal,
  setMovieClicked
}) => {
  const cardClicked = () => {
    setShowModal(!showModal);
    setMovieClicked(element);
  };

  const poster = element.poster_path;
  const title = element.title;

  return (
    <div key={index} className="movieCard" onClick={cardClicked}>
      <div className="moviePosterContainer">
        <img
          className={poster ? "moviePoster" : "noMoviePoster"}
          alt="moviePoster"
          src={
            poster
              ? "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + poster
              : noImage
          }
        />
      </div>
      <div className="movieTitleContainer">
        <span className="movieTitle">{title}</span>
      </div>
    </div>
  );
};

export default MovieCard;
