import React from "react";
import { Movies } from "../../Data";
import MovieCard from "./MovieCard";

export default function Movie({ filter }) {
  // console.log(filter, Movies[0])

  return (
    <>
      {filter === "rate"
        ? Movies.sort((a, b) => b.imdbRating - a.imdbRating).map((movie) => (
            <MovieCard
              key={movie.Title}
              Genre={movie.Genre}
              Runtime={movie.Runtime}
              Images={movie.Images}
              Title={movie.Title}
              Year={movie.Year}
              Plot={movie.Plot}
              imdbRating={movie.imdbRating}
            />
          ))
        : filter === "A-Z"
        ? Movies.sort((a, b) => {
            var tittleA = a.Title.toLowerCase();
            var tittleB = b.Title.toLowerCase();
            if (tittleA < tittleB) {
              return -1;
            } else if (tittleA > tittleB) {
              return 1;
            }
            return 0;
          }).map((movie) => (
            <MovieCard
              key={movie.Title}
              Genre={movie.Genre}
              Runtime={movie.Runtime}
              Images={movie.Images}
              Title={movie.Title}
              Year={movie.Year}
              Plot={movie.Plot}
              imdbRating={movie.imdbRating}
            />
          ))
        : Movies.reverse().map((movie) => (
            <MovieCard
              key={movie.Title}
              Genre={movie.Genre}
              Runtime={movie.Runtime}
              Images={movie.Images}
              Title={movie.Title}
              Year={movie.Year}
              Plot={movie.Plot}
              imdbRating={movie.imdbRating}
            />
          ))}
    </>
  );
}
