import { createSlice } from "@reduxjs/toolkit";
import { IHomeState } from "./types";

const initialState: IHomeState = {
  charactersList: null,
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCharactersList(state, action) {
      const ref = state;
      ref.charactersList = action.payload;
    },
  },
});

export const { setCharactersList } = HomeSlice.actions;
export default HomeSlice.reducer;
