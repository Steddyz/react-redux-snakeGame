import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    toggleButton: "Start",
    snake: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
    apple: {
      x: 1,
      y: 1,
    },
  },
  reducers: {
    switchButton(state, action) {
      state.toggleButton = action.payload;
      //   state.toggleButton = state.toggleButton === "Start" ? "Pause" : "Start";
    },
  },
});

export const { switchButton } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
