import React from "react";

import MovieCard from "../components/MovieCard.js";

const MovieList = ({
  handleScroll,
  myMovieList,
  showModal,
  setShowModal,
  setMovieClicked
}) => {
  return (
    <div onScroll={handleScroll} className="movieListContainer">
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
