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

      x = x >= 9 ? 0 : x + 1;

      state.snake.push({ x, y });
      state.snake = state.snake.slice(-state.snakeSize);
    },
  },
});

export const { switchButton, moveSnake } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
