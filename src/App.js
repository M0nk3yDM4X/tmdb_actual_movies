import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [myMovieList, setMyMovieList] = useState({});
  const [page, setPage] = useState(1);
  const [dataPages, setDataPages] = useState();

  let link =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=f6102bdcf50d58b04b50380aa65a1652&language=fr&page=" +
    page;

  const fetchData = async () => {
    try {
      const response = await axios.get(link);
      setMyMovieList(response.data.results);
      setDataPages(response.data.total_pages);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleScroll = e => {
    let element = e.target;
    // console.log(element.scrollHeight);
    console.log("ceci est le scrollTop >>>", element.scrollTop);
    console.log(element.scrollHeight - element.scrollTop);
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (page < dataPages) {
        setPage(page + 1);
      }
    } else if (element.scrollTop === 0) {
      if (page > 1) {
        setPage(page - 1);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // useEffect(() => {
  //   console.log(myMovieList);
  // }, [myMovieList]);

  return (
    <div className="App">
      {isLoading === true ? (
        <span>Chargement en cours...</span>
      ) : (
        <>
          <h1>Liste de films</h1>
          <section className="moviesList">
            <div
              onScroll={handleScroll}
              style={{
                // border: "1px solid black",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "95%",
                height: "650px",
                overflow: "scroll",
                padding: "10px 0 0 0"
              }}
            >
              {myMovieList.map((element, index) => {
                console.log(element.title);
                return (
                  <div key={element.id} className="movieCard">
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
                );
              })}
              {/* <span
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            >
              PREV
            </span>
            <span
              onClick={() => {
                if (page < dataPages) {
                  setPage(page + 1);
                }
              }}
            >
              NEXT
            </span> */}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default App;
