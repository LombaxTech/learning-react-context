import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function AddMovie() {
    const [movies, setMovies] = useContext(MovieContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const addMovie = () => {
        setMovies([...movies, { name, price }]);
    };

    return (
        <div>
            <label>Movie Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Price</label>
            <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button onClick={addMovie}>Add Movie</button>
        </div>
    );
}
