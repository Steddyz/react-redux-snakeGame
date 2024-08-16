import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    status: "Start",
    buttonsValue: {
      Start: "Pause",
      Pause: "Resume",
      Resume: "Pause",
    },
    snake: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
    snakeSize: 2,
    diretion: "d",
    apple: {
      x: 1,
      y: 1,
    },
  },
  reducers: {
    switchButton(state) {
      state.status = state.buttonsValue[state.status];
    },
    moveSnake(state, action) {
      let { x, y } = state.snake.slice(-1)[0];

      switch (state.diretion) {
        case "d":
          x = x >= 9 ? 0 : x + 1;
          break;
        case "a":
          x = x <= 0 ? 9 : x - 1;
          break;
        case "w":
          y = y <= 0 ? 9 : y - 1;
          break;
        case "s":
          y = y >= 9 ? 0 : y + 1;
          break;
      }

      state.snake.push({ x, y });
      state.snake = state.snake.slice(-state.snakeSize);
    },
    setDirection(state, action) {
      state.diretion = action.payload;
    },
  },
});

export const { switchButton, moveSnake, setDirection } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
