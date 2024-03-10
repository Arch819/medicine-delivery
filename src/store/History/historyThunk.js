import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";
const { getOrderByCustomer, getOrderById } = api.orderApi;

export const getOrderByCustomerThunk = createAsyncThunk(
  "history/fetch/byCustomer",
  async (customer, { rejectWithValue }) => {
    try {
      const data = await getOrderByCustomer(customer);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getOrderByIdThunk = createAsyncThunk(
  "history/fetch/byOrderId",
  async (orderId, { rejectWithValue }) => {
    try {
      const data = await getOrderById(orderId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
