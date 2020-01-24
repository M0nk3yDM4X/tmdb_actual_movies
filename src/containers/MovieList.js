import React from "react";
import { KeyboardArrowUp } from "@material-ui/icons";

import MovieCard from "../components/MovieCard.js";

const MovieList = ({
  handleScroll,
  myMovieList,
  showModal,
  setShowModal,
  setMovieClicked,
  top
}) => {
  return (
    <div id="toto" onScroll={handleScroll} className="movieListContainer">
      {top > 300 && showModal === false ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px",
            position: "fixed",
            right: "142px",
            top: "550px",
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            border: "2px solid black"
          }}
          onClick={() => {
            document.querySelector("#toto").scrollTo(0, 0);
          }}
        >
          <KeyboardArrowUp />
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
