import React from "react";

function Actor({name, movies}) {
   return( <div>
        <h2>Name: {name} </h2>
    <p>Movies:</p>
    <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
    </ul>
    </div>
   )
}

export default Actor