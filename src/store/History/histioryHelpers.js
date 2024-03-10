export const getOrderFulfilled = (state, { payload }) => {
  state.orders = payload;
};
