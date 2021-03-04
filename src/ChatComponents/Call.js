import React, { useState, useContext } from "react";
import Lobby from "./Lobby";
import Room from "./Room";
import { RoomContext } from "./RoomContext";

export default function Call() {
    const [room, setRoom] = useContext(RoomContext);

    // console.log(room);

    if (!room) return <Lobby />;
    else return <Room />;
}
