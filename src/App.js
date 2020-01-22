import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Logo from "./images/logo.png";

import Modal from "./components/Modal.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [myMovieList, setMyMovieList] = useState([]);
  const [movieClicked, setMovieClicked] = useState();
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
    // console.log("ceci est la scrollheight", element.scrollHeight);
    // console.log("ceci est le scrollTop >>>", element.scrollTop);
    // console.log(element.scrollHeight - element.scrollTop);
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (page < dataPages) {
        setPage(page + 1);
      }
    }

    // else if (element.scrollTop === 0) {
    //   if (page > 1) {
    //     setPage(page - 1);
    //   }
    // }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // useEffect(() => {
  //   console.log(myMovieList);
  // }, [myMovieList]);

  // useEffect(() => {
  //   console.log(showModal);
  // }, [showModal]);

  // useEffect(() => {
  //   console.log(myProductsList);
  // }, [myProductsList]);

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
              <span>Films du moment</span>
            </div>
            <div onScroll={handleScroll} className="movieListContainer">
              {myMovieList.map((element, index) => {
                return (
                  <>
                    {element !== null ? (
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
                            className="moviePoster"
                            alt="moviePoster"
                            src={
                              "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                              element.poster_path
                            }
                          />
                        </div>
                        <div className="movieTitleContainer">
                          <span className="movieTitle">{element.title}</span>
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default App;
