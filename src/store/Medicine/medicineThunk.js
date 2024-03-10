import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getAllMedicineThunk = createAsyncThunk(
  "fetch/medicine",
  async (params, { rejectWithValue }) => {
    try {
      return await api.medicineApi.getAllMedicine(params);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getFilterMedicineThunk = createAsyncThunk(
  "medicine/getByFilter",
  async (params, { rejectWithValue }) => {
    try {
      const transformParams = {
        ...params,
        search: params.search === "" ? null : params.search,
        priceFrom: params.priceFrom === "" ? null : params.priceFrom,
        priceTo: params.priceTo === "" ? null : params.priceTo,
      };
      const data = await api.medicineApi.getAllMedicine(transformParams);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
