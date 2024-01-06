import React, { useEffect, useState } from "react";
import "./Banner.css";
import axiosInstance from "../../utils/axios";

import { apiKey, imageUrl } from "../../constants/constants";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`trending/all/week?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        let movieIndex = Math.floor(Math.random() * 10);
        setBannerMovie(response.data.results[movieIndex]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          bannerMovie && imageUrl + bannerMovie.backdrop_path
        })`,
      }}
    >
      <div className="content">
        <h1 className="title">
          {bannerMovie &&
            (bannerMovie.title ? bannerMovie.title : bannerMovie.name)}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{bannerMovie && bannerMovie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
