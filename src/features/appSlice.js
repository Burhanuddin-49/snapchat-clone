import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    value: 0,
  },

  reducers: {
    enterRoom: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.value;

export default appSlice.reducer;
