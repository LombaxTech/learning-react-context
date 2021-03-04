import React, { useState, useContext } from "react";
import Nav from "./MovieComponents/Nav";
import Movies from "./MovieComponents/Movies";
import AddMovie from "./MovieComponents/AddMovie";
import { MovieProvider } from "./MovieComponents/MovieContext";

import Lobby from "./ChatComponents/Lobby";
import Room from "./ChatComponents/Room";
import Call from "./ChatComponents/Call";
import { RoomContext } from "./ChatComponents/RoomContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Call} />
            </Switch>
        </Router>
    );
}

// return (
//     <>
//         <MovieProvider>
//             <Nav />
//             <Movies />
//             <AddMovie />
//         </MovieProvider>
//     </>
// );
