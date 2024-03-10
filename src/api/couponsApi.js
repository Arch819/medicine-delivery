import axios from "axios";

export const getAllCoupons = async () => {
  const { data } = await axios("/coupons");
  return data;
};
