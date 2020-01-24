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
  // returnAtTop function allow user to go back at the beginning of the movieList
  const returnAtTop = () => {
    document.querySelector("#top").scrollTo(0, 0);
  };

  return (
    <div id="top" onScroll={handleScroll} className="movieListContainer">
      {/* if state value top is up to 300 and that state modal is equal to false, then button backToTop will be showed  */}
      {top > 300 && showModal === false ? (
        <div className="arrowTopContainer" onClick={returnAtTop}>
          <KeyboardArrowUp style={{ color: " #071c24" }} />
        </div>
      ) : null}

      {/* Mapping on myMovieList state values which is an array, which will allow us to have every elements of this array */}
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
