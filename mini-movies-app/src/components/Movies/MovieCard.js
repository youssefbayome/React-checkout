import React from "react";
import "../../App.css";
const MovieCard = ({ Year, Title, Images, Plot, Runtime, Genre }) => {
  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={Images[0]} alt="movie Poster" />
          <h1>{Title}</h1>
          <h4>{Year}</h4>
          <span className="minutes">{Runtime}</span>
          <p className="type">{Genre}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{Plot}</p>
        </div>
      </div>
      <div
        className="blur_back bright_back"
        style={{
          backgroundImage: `url(${Images[2]})`,
        }}
      ></div>
    </div>
  );
};

export default MovieCard;
