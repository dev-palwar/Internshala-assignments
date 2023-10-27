import React, { useState } from "react";
import "./App.css";

function App() {
  const boxSize = 50;
  const containerSize = 300;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (direction) => {
    let newX = position.x;
    let newY = position.y;

    switch (direction) {
      case "up":
        newY = Math.max(0, position.y - 20);
        break;
      case "down":
        newY = Math.min(containerSize - boxSize, position.y + 20);
        break;
      case "left":
        newX = Math.max(0, position.x - 20);
        break;
      case "right":
        newX = Math.min(containerSize - boxSize, position.x + 20);
        break;
      default:
        break;
    }

    setPosition({ x: newX, y: newY });
  };

  return (
    <div className="App">
      <div className="horizontal-button">
        <button onClick={() => handleMove("up")}>Up</button>
      </div>
      <div className="middle-part">
        <div className="vertical-button">
          <button onClick={() => handleMove("left")}>Left</button>
        </div>
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "1rem",
            marginRight: "1rem",
            position: "relative",
            width: containerSize + "px",
            height: containerSize + "px",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundColor: "yellow",
              width: boxSize + "px",
              height: boxSize + "px",
              top: position.y + "px",
              left: position.x + "px",
            }}
          ></div>
        </div>
        <div className="vertical-button">
          <button onClick={() => handleMove("right")}>Right</button>
        </div>
      </div>
      <div className="horizontal-button">
        <button onClick={() => handleMove("down")}>Down</button>
      </div>
    </div>
  );
}

export default App;
