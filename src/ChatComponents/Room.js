import React, { useState, useContext, useEffect } from "react";
import { RoomContext } from "./RoomContext";

export default function Room() {
    const [room, setRoom] = useContext(RoomContext);

    if (!room)
        return (
            <div>
                <h1>Room doesnt exist</h1>
                <button onClick={() => (window.location = "/lobby")}>
                    Go to Lobby
                </button>
            </div>
        );

    return (
        <div>
            <h1>Room: {room.roomName}</h1>
            <button onClick={() => setRoom(null)}>Leave Room</button>
        </div>
    );
}
