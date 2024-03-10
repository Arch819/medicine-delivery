import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const orderMedicineThunk = createAsyncThunk(
  "order/fetch",
  async (body, { rejectWithValue }) => {
    try {
      return await api.orderApi.createOrder(body);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
