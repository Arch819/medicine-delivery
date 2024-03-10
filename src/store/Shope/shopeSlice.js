import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getAllShopsThunk } from "./shopThunk";
import { getAllShopeFulfilled } from "./shopeHelpers";

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllShopsThunk.fulfilled, getAllShopeFulfilled);
  },
});

export const shopeReducer = shopSlice.reducer;
