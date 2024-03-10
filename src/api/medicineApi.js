import axios from "axios";

export const getAllMedicine = async (params) => {
  const { data } = await axios("medicine", { params: { ...params } });
  return data;
};
