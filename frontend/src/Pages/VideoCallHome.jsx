import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoCallHome.css"; // changed from Home.css


function Home() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <div className="homepage">
      <form onSubmit={handleFormSubmit} className="form-container">
        <h2 className="form-title">Join a Room</h2>
        <div className="input-group">
          <label htmlFor="roomCode" className="input-label">
            Enter Room Code
          </label>
          <input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            name="roomCode"
            id="roomCode"
            required
            className="input-box"
            placeholder="e.g. room123"
          />
        </div>
        <button type="submit" className="submit-button">
          Enter Room
        </button>
      </form>
    </div>
  );
}

export default Home;
