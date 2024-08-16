import React from "react";
import { useSelector } from "react-redux";

export default function Square({ square }) {
  const snake = useSelector((store) => store.game.snake);
  const apple = useSelector((store) => store.game.apple);

  let buttonStyle = "";

  for (let s of snake) {
    if (s.x === square.x && s.y === square.y) {
      buttonStyle = "snake";
    }
  }

  if (square.x === apple.x && square.y === apple.y) {
    buttonStyle = "apple";
  }
  return (
    <span className="Square">
      <button className={buttonStyle}></button>
    </span>
  );
}
