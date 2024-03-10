import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const getAllShopsThunk = createAsyncThunk(
  "fetch/shops",
  async (_, { rejectWithValue }) => {
    try {
      return await api.shopApi.getAllShops();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
