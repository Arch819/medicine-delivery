import { initialState } from "./initialState";

// export const addMedicine = (state, { payload }) => {
//   state.medicine.push(payload);
// };
// ,

// export const changeQuantity = (state, { payload }) => {
//   state.medicine.map((item) => {
//     if (item._id === payload._id) {
//       return (item.quantity = payload.quantity);
//     }
//     return item;
//   });
// };

export const orderMedicineFulfilled = (state, { payload }) => {
  return initialState;
};
