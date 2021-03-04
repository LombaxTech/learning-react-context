import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            Nav
            <h2>Amount of movies: {movies.length}</h2>
        </div>
    );
}
