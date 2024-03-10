import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { isInclude } from "utils/isInclude";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, { payload }) {
      const isItemInList = isInclude(
        state.favoriteMedicine,
        "_id",
        payload._id
      );
      if (!isItemInList.isExist) {
        state.favoriteMedicine.push(payload);
      }
    },
    removeFromFavorite(state, { payload }) {
      state.favoriteMedicine = state.favoriteMedicine.filter(
        (i) => i._id !== payload._id
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
