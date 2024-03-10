import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getAllMedicineThunk, getFilterMedicineThunk } from "./medicineThunk";
import {
  fetchFilterMedicineFulfilled,
  getAllMedicineFulfilled,
} from "./medicineHelpers";

const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  reducers: {
    handleUpdateFilters(state, { payload }) {
      state.filters = { ...state.filters, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMedicineThunk.fulfilled, getAllMedicineFulfilled)
      .addCase(getFilterMedicineThunk.fulfilled, fetchFilterMedicineFulfilled);
  },
});

export const medicineReducer = medicineSlice.reducer;
export const { handleUpdateFilters } = medicineSlice.actions;
