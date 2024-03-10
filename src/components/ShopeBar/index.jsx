import { useEffect } from "react";
import EmptyMessage from "components/EmptyMessage";
import { useDispatch, useSelector } from "react-redux";
import { GrPowerReset } from "react-icons/gr";
import { selectShop } from "store/Shope/shopeSelector";
import { getAllShopsThunk } from "store/Shope/shopThunk";
import {
  ShopItemBtnStyle,
  ShopItemStyle,
  ShopsBarStyle,
  ShopsBarTittle,
  ShopsListStyle,
  ShopsResetBtnStyle,
} from "./ShopsBar.styled";

function ShopsBar({ changeShop, params: { shop } }) {
  const dispatch = useDispatch();
  const shopsList = useSelector(selectShop);

  useEffect(() => {
    !shopsList.length && dispatch(getAllShopsThunk());
  }, [dispatch, shopsList.length]);

  const handleReset = () => {
    if (!shop) {
      return;
    }
    changeShop({ shop: "" });
  };

  return (
    <ShopsBarStyle>
      <ShopsResetBtnStyle
        type="button"
        className="btn-submit"
        onClick={handleReset}
        disabled={!shop}
        aria-label="Reset filter"
      >
        <GrPowerReset />
      </ShopsResetBtnStyle>
      <ShopsBarTittle>Shops:</ShopsBarTittle>
      {shopsList.length ? (
        <ShopsListStyle>
          {shopsList.map((shop) => (
            <ShopItemStyle key={shop._id}>
              <ShopItemBtnStyle
                className="btn"
                onClick={() => changeShop({ shop: shop._id })}
              >
                {shop.title}
              </ShopItemBtnStyle>
            </ShopItemStyle>
          ))}
        </ShopsListStyle>
      ) : (
        <EmptyMessage something="shops not found" />
      )}
    </ShopsBarStyle>
  );
}

export default ShopsBar;
