import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Logo from "./images/logo.png";

import Modal from "./components/Modal/Modal.js";
import MovieList from "./components/MovieList/MovieList.js";

const App = () => {
  // Setting a state loading, with default value equal to true
  const [isLoading, setIsLoading] = useState(true);

  // Setting a state myMovieList, with default value equal to an empty array
  const [myMovieList, setMyMovieList] = useState([]);

  // Setting a state movieClicked, with default value equal to an empty object
  const [movieClicked, setMovieClicked] = useState({});

  // Setting a state page, with default value equal to 1
  const [page, setPage] = useState(1);

  // Setting a state datePages, with default value equal to 0
  const [dataPages, setDataPages] = useState(0);

  // Setting a state showModal, with default value equal to false
  const [showModal, setShowModal] = useState(false);

  // Setting a state top, with default value equal to 0
  const [top, setTop] = useState(0);

  // Setting a variable called link, which is actually the URL that I use to call data from The Movie DataBase API
  // Value of state page will increase to load more data from page to page
  let link =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
    process.env.REACT_APP_API_KEY_TMDB +
    "&language=fr&page=" +
    page;

  // fetchData function which is an axios call to fetch Data from The Movie DataBase API
  // Response that I get from the call is going inside to states:
  // 1) setMyMovieList is an addition of actual value of myMovieList + movies from the API
  // 2) setDataPages is here to save the number of pages that the API have

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

  // handleScroll function which provide the end of the div by listening user scroll
  // When user is at the bottom, state page will increase by is previous value + 1

  // We are also saving length from the top bu using state top

  const handleScroll = e => {
    let element = e.target;

    setTop(element.scrollTop);

    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (page < dataPages) {
        setPage(page + 1);
      }
    }
  };

  // useEffect will call data at the first load of the page, and everytimes than state page increase,
  // In other words, everytimes user is scrolling down at the bottom of the window, state page will increase,
  // and by this action, data will be loaded again.
  //

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
            <img src={Logo} alt="logo" className="logo" />
          </header>
          <section className="nowPlaying">
            <div className="nowPlayingTitleContainer">
              <h1>actuellement au cinéma</h1>
            </div>
            <MovieList
              handleScroll={handleScroll}
              myMovieList={myMovieList}
              showModal={showModal}
              setShowModal={setShowModal}
              setMovieClicked={setMovieClicked}
              top={top}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
