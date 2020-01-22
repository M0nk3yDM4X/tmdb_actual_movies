import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Logo from "./images/logo.png";

import Modal from "./components/Modal.js";
import MovieList from "./containers/MovieList.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [myMovieList, setMyMovieList] = useState([]);
  const [movieClicked, setMovieClicked] = useState({});
  const [page, setPage] = useState(1);
  const [dataPages, setDataPages] = useState();
  const [showModal, setShowModal] = useState(false);

  let link =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=f6102bdcf50d58b04b50380aa65a1652&language=fr&page=" +
    page;

  const fetchData = async () => {
    try {
      const response = await axios.get(link);
      setMyMovieList([...myMovieList, ...response.data.results]);
      setDataPages(response.data.total_pages);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleScroll = e => {
    let element = e.target;

    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (page < dataPages) {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="App">
      {isLoading === true ? (
        <span>Chargement en cours...</span>
      ) : (
        <>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            movieClicked={movieClicked}
          />
          <header className="header">
            <img src={Logo} className="logo" />
          </header>
          <section className="nowPlaying">
            <div className="nowPlayingTitleContainer">
              <span>Actuellement au cinéma</span>
            </div>
            <MovieList
              handleScroll={handleScroll}
              myMovieList={myMovieList}
              showModal={showModal}
              setShowModal={setShowModal}
              setMovieClicked={setMovieClicked}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
