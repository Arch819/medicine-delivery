import axios from "axios";

export const getAllShops = async () => {
  const { data } = await axios("shops");
  return data;
};
