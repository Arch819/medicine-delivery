import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./Cart/cartSlice";
import { medicineReducer } from "./Medicine/medicineSlice";
import { shopeReducer } from "./Shope/shopeSlice";
import { appReducer } from "./appState/appStateSlice";
import { historyReducer } from "./History/historySlice";
import { favoriteReducer } from "./Favorite/favoriteSlice";
import { couponsReducer } from "./Coupons/couponsSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};
const favoritePersistConfig = {
  key: "favorite",
  storage,
};

const favoritePersistReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);
const cartPersistReducer = persistReducer(cartPersistConfig, cartReducer);

export const reducer = {
  shop: shopeReducer,
  appState: appReducer,
  medicine: medicineReducer,
  cart: cartPersistReducer,
  orderHistory: historyReducer,
  favorite: favoritePersistReducer,
  coupons: couponsReducer,
};
