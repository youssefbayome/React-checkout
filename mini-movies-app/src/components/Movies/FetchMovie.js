import { Movies } from "../../Data";
import MovieCard from "./MovieCard";

export default function Movie() {
  return (
    <>
      {Movies.map((movie) => (
        <MovieCard
          key={movie.Title}
          Genre={movie.Genre}
          Runtime={movie.Runtime}
          Images={movie.Images}
          Title={movie.Title}
          Year={movie.Year}
          Plot={movie.Plot}
        />
      ))}
    </>
  );
}
