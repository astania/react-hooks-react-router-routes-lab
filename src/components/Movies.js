import React from "react";
import { movies } from "../data";
import Movie from "./Movie"

function Movies() {
  return <div>
    <h1>Movies Page</h1>
  {movies.map(movie => <Movie title={movie.title} time={movie.time} genres={movie.genres} key={movie.time}/>)}

  </div>;
}

export default Movies;
