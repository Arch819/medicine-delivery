export const getAllMedicineFulfilled = (state, { payload }) => {
  state.medicine = payload;
};

export const fetchFilterMedicineFulfilled = (state, { payload }) => {
  state.medicine = payload;
};
