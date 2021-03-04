import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([
        {
            name: "HP",
            price: 10,
        },
        {
            name: "LOTR",
            price: 10,
        },
        {
            name: "SW",
            price: 10,
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
    );
};
