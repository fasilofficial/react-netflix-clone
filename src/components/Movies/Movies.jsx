import React, { useState, useEffect } from "react";
import "./Movies.css";
import axiosInstance from "../../utils/axios";
import { imageUrl, apiKey } from "../../constants/constants";
import { FaAngleRight } from "react-icons/fa6";
import YouTube from "react-youtube";

const Movies = ({ title, isLarge, url }) => {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => alert("Network error: ", error.message));
  }, []);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleTrailerPlay = (movieId) => {
    if (videoId) {
      return setVideoId(null);
    }
    axiosInstance
      .get(`/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        if (response.data.results.length > 0) {
          setVideoId(response.data.results[0].key);
        }
      });
  };

  return (
    <div className="rows">
      <div className="row">
        <div className="title-parent">
          <h2 id={title.toLowerCase()}>
            {title.toLowerCase() === "originals"
              ? `Netflix ${title}`
              : `${title}`}
          </h2>
          <FaAngleRight />
        </div>
        <div className="posters">
          {movies &&
            movies.map((movie) => {
              return (
                <img
                  key={movie.id}
                  className={isLarge ? "poster large" : "poster"}
                  alt="poster"
                  src={`${imageUrl}${movie.poster_path}`}
                  onClick={() => handleTrailerPlay(movie.id)}
                />
              );
            })}
        </div>
        {videoId && <YouTube videoId={videoId} opts={opts} />}
      </div>
    </div>
  );
};

export default Movies;
