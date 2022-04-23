import { Movies } from "../../Data";
import MovieCard from "./MovieCard";

export default function Movie() {
  return (
    <>
      {Movies.map((movie) => (
        <div key={movie.Title}>
          <MovieCard
            Genre={movie.Genre}
            Runtime={movie.Runtime}
            Images={movie.Images}
            Title={movie.Title}
            Year={movie.Year}
            Plot={movie.Plot}
          />
        </div>
      ))}
    </>
  );
}
