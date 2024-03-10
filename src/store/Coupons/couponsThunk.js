import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getAllCouponsThunk = createAsyncThunk(
  "fetch/coupons",
  async (_, { rejectWithValue }) => {
    try {
      return await api.couponsApi.getAllCoupons();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
