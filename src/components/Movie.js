import React from "react";

function Movie ({title, time, genres}) {
    return(
        <div>
            <h2>Name: {title}</h2>
            <p>Time: {time} </p>
            <p>Genres:</p>
            <ul>{genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
            
        </div>
    )

}

export default Movie