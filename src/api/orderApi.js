import axios from "axios";

export const createOrder = async (body) => {
  const { data } = await axios.post("order", body);
  return data;
};

export const getOrderById = async (orderId) => {
  const { data } = await axios(`/order/history/${orderId}`);
  return data;
};

export const getOrderByCustomer = async (customer) => {
  const { data } = await axios.post("/order/history", customer);
  return data;
};
