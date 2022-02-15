import React from "react";
import { actors } from "../data";
import Actor from "./Actor";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    
    {actors.map(actor => <Actor name={actor.name} movies={actor.movies} key={actor.name}/>)}
    
    </div>;
}

export default Actors;
