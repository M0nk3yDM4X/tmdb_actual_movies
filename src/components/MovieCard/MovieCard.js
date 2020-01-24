import React from "react";
import "./MovieCard.css";

import noImage from "../../images/no-image.png";

const MovieCard = ({
  index,
  element,
  showModal,
  setShowModal,
  setMovieClicked
}) => {
  // cardClicked function which change state showModal by the reverse of the actual value, so it's gonna be "true"
  // It also change movieClicked state, by setting is new value to "element", which is in fact all details about the movie that has been clicked
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
