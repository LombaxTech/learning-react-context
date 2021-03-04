import React, { useState, useContext } from "react";
import { RoomContext } from "./RoomContext";

export default function Lobby() {
    const [room, setRoom] = useContext(RoomContext);

    const [roomName, setRoomName] = useState("");

    return (
        <div>
            <h1>Lobby</h1>
            <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
            />
            <button onClick={() => setRoom({ roomName })}>Join Room</button>
        </div>
    );
}
