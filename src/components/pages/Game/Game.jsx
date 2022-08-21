import "./Game.css";
import { useState, useEffect } from "react";

function Game() {
  const [level, setLevel] = useState(0);
  const [gameTimer, setGameTimer] = useState({});

  useEffect(() => {
    console.log("Welcome");
  }, [gameTimer]);

  useEffect(() => {
    console.log("Onload Alert");
  }, []);

  useEffect(() => {
    console.log("You Try To Level Up");
  }, [level]);

  return (
    <div className="game">
      <h1>Game</h1>
      <h1>{level}</h1>
      <button
        onClick={() => {
          setLevel(level + 1);
        }}
      >
        Click for Level Up
      </button>
      <div>
        <button
          onClick={() => {
            setGameTimer(new Date());
          }}
        >
          Check Time
        </button>
      </div>
    </div>
  );
}

export default Game;
