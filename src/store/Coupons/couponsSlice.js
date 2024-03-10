import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initslState";
import { getAllCouponsThunk } from "./couponsThunk";
import { getAllCouponsFulfilled } from "./couponsHelpers";

const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCouponsThunk.fulfilled, getAllCouponsFulfilled);
  },
});

export const couponsReducer = couponsSlice.reducer;
