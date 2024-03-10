import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { orderMedicineThunk } from "./cartThunk";
import { orderMedicineFulfilled } from "./cartHelpers";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMedicine(state, { payload }) {
      const existingItem = state.cart.find((item) => item._id === payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push(payload);
      }
    },
    deleteMedicine(state, { payload }) {
      state.cart = state.cart.filter((item) => item._id !== payload);
    },
    changeQuantity(state, { payload }) {
      state.cart.map((item) => {
        if (item._id === payload.id) {
          return (item.quantity = payload.value);
        }
        return item;
      });
    },
    clearCart() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderMedicineThunk.fulfilled, orderMedicineFulfilled);
  },
});

export const cartReducer = cartSlice.reducer;
export const { addMedicine, deleteMedicine, changeQuantity, clearCart } =
  cartSlice.actions;
