import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard.js";

import { KeyboardArrowUp } from "@material-ui/icons";

const MovieList = ({
  handleScroll,
  myMovieList,
  showModal,
  setShowModal,
  setMovieClicked,
  top
}) => {
  const returnAtTop = () => {
    document.querySelector("#top").scrollTo(0, 0);
  };

  return (
    <div id="top" onScroll={handleScroll} className="movieListContainer">
      {top > 300 && showModal === false ? (
        <div className="arrowTopContainer" onClick={returnAtTop}>
          <KeyboardArrowUp style={{ color: " #071c24" }} />
        </div>
      ) : null}
      {myMovieList.map((element, index) => {
        return (
          <>
            {element !== null ? (
              <MovieCard
                index={index}
                element={element}
                showModal={showModal}
                setShowModal={setShowModal}
                setMovieClicked={setMovieClicked}
              />
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default MovieList;
