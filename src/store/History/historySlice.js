import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
const {
  getOrderByCustomerThunk,
  getOrderByIdThunk,
} = require("./historyThunk");
const { getOrderFulfilled } = require("./histioryHelpers");

const historySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOrderByCustomerThunk.fulfilled, getOrderFulfilled)
      .addCase(getOrderByIdThunk.fulfilled, getOrderFulfilled);
  },
});

export const historyReducer = historySlice.reducer;
