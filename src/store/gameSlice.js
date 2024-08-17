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
    snakeHead: { x: 1, y: 0 },
    snakeSize: 2,
    diretion: "d",
    apple: {
      x: 1,
      y: 1,
    },
    stopKey: [
      ["w", "s"],
      ["s", "w"],
      ["a", "d"],
      ["d", "a"],
    ],
    savedKey: "d",
  },
  reducers: {
    switchButton(state) {
      state.status = state.buttonsValue[state.status];
    },
    moveSnake(state) {
      if (state.status === "Restart") return;

      let { x, y } = state.snakeHead;

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
        default:
          break;
      }
      state.snakeHead = { x, y };
      state.snake.push({ x, y });
      state.snake = state.snake.slice(-state.snakeSize);
    },
    saveKey(state, action) {
      for (let [a, b] of state.stopKey) {
        if (a === state.diretion && b === action.payload) return;
      }

      state.savedKey = action.payload;
    },
    setDirection(state) {
      state.diretion = state.savedKey;
    },
    setApple(state) {
      let { snakeHead, apple } = state;

      if (apple.x === snakeHead.x && apple.y === snakeHead.y) {
        let isOnSnake = null;

        do {
          apple.x = Math.floor(Math.random() * 10);
          apple.y = Math.floor(Math.random() * 10);
          isOnSnake = state.snake.find(
            (s) => s.x === apple.x && s.y === apple.y
          );
        } while (isOnSnake);
        state.snakeSize++;
        state.apple = apple;
      }
    },
    setGameover(state) {
      let { x, y } = state.snakeHead;
      let snakeHeadless = state.snake.slice();
      snakeHeadless.pop();

      let bitedPlace = null;

      bitedPlace = snakeHeadless.find((s) => s.x === x && s.y === y);
      if (bitedPlace) state.status = "Restart";
    },
  },
});

export const {
  switchButton,
  moveSnake,
  saveKey,
  setDirection,
  setApple,
  setGameover,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
