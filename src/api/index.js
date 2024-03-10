import axios from "axios";
import * as shopApi from "./shopApi";
import * as medicineApi from "./medicineApi";
import * as orderApi from "./orderApi";
import * as couponsApi from "./couponsApi";

axios.defaults.baseURL = "http://localhost:8000";

const api = { shopApi, medicineApi, orderApi, couponsApi };
export default api;
