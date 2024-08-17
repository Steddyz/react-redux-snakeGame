import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import {
  moveSnake,
  switchButton,
  setDirection,
  setApple,
  setGameover,
} from "../../store/gameSlice";

export default function ButtonStatus() {
  const status = useSelector((store) => store.game.status);
  const dispatch = useDispatch();

  let timer = useRef(null);

  const update = () => {
    dispatch(moveSnake());
    dispatch(setDirection());
    dispatch(setApple());
    dispatch(setGameover());
  };

  const startTimer = () => {
    timer.current = setInterval(() => update(), 200);
  };

  const stopTimer = () => clearInterval(timer.current);

  const handleClick = () => {
    if (status === "Restart") {
      window.location.reload();
      return;
    }

    if (status !== "Pause") {
      startTimer();
    } else {
      stopTimer();
    }

    dispatch(switchButton("Resume"));
  };
  return (
    <div className="Status">
      <button className="start_button" onClick={handleClick}>
        {status}
      </button>
    </div>
  );
}
