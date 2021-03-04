import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function Movies() {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <h2>Movies</h2>
            {movies.map((movie, i) => (
                <div key={i}>
                    <h4>{movie.name}</h4>
                    <h5>Price: {movie.price}</h5>
                </div>
            ))}
        </div>
    );
}
