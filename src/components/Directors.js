import React from "react";
import { directors } from "../data";
import Director from "./Director";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map(director => <Director name={director.name} movies={director.movies} key={director.name}/>)}
    </div>;
}

export default Directors;
