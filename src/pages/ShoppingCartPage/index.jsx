import CartList from "components/CartList";
import CustomerInfo from "components/CustomerInfo";
import React, { useMemo, useState } from "react";
import { TbDiscount2 } from "react-icons/tb";
import {
  AddCouponToOrderStyle,
  DiscountControllerStyle,
  OrderControlStyle,
  OrderPriceStyle,
  OrderSubmitBoxStyle,
  OrderSubmitBtnStyle,
  ShoppingCartWrappStyle,
  UseDiscountFormStyle,
} from "./ShoppingCartPage.stuled";
import { useDispatch, useSelector } from "react-redux";
import { orderMedicineThunk } from "store/Cart/cartThunk";
import { selectCart } from "store/Cart/cartSelector";
import { clearCart } from "store/Cart/cartSlice";
import { notiflixConfirm, notiflixMessage } from "utils/notiflixMessages";
import { isInclude } from "utils/isInclude";
import { selectCoupons } from "store/Coupons/couponsSelector";

const USERINFO = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

function ShoppingCartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInfo, setUserInfo] = useState(USERINFO);
  const [discount, setDiscount] = useState(0);
  const [discountInput, setDiscountInput] = useState(false);
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);
  const coupons = useSelector(selectCoupons);

  const handleSubmit = async () => {
    const order = {
      ...userInfo,
      orderList: {
        medicine: cartList,
        totalPrice,
      },
    };
    await notiflixConfirm("order")
      .then(() =>
        dispatch(orderMedicineThunk(order)).then(({ error }) => {
          if (error) {
            return;
          }
          dispatch(clearCart());
          setUserInfo(USERINFO);
          notiflixMessage("ok", "Thank you for your order");
        })
      )
      .catch(() => {
        return;
      });
  };
  const calcTotalPrice = useMemo(() => {
    let total = 0;
    cartList.map((item) => (total = total + item.price * item.quantity));
    const orderPrice = (total - total * (discount / 100)).toFixed(2);
    setTotalPrice(orderPrice);
  }, [cartList, discount]);

  const useCoupon = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.discount;
    const coupon = isInclude(coupons, "code", value);
    if (!coupon.isExist) {
      return notiflixMessage("error", "Discount code is inactive or incorrect");
    }
    setDiscount(coupon.item.discount);
    setDiscountInput((prev) => !prev);
  };

  const handleToggleDiscountInput = () => {
    setDiscountInput((prev) => !prev);
  };

  return (
    <ShoppingCartWrappStyle className="container">
      <CustomerInfo userInfo={userInfo} setUserInfo={setUserInfo} />
      <CartList
        cartList={cartList}
        setTotalPrice={setTotalPrice}
        calcTotalPrice={calcTotalPrice}
      />
      <OrderControlStyle>
        <DiscountControllerStyle>
          {discountInput && (
            <UseDiscountFormStyle onSubmit={useCoupon}>
              <input type="text" name="discount" />
              <button type="submit">
                <TbDiscount2 />
              </button>
            </UseDiscountFormStyle>
          )}
          <AddCouponToOrderStyle
            onClick={handleToggleDiscountInput}
            className="btn"
          >
            Coupon
          </AddCouponToOrderStyle>
        </DiscountControllerStyle>
        <OrderSubmitBoxStyle>
          <OrderPriceStyle title={`-${discount}%`} $discount={discount}>
            Total Price: {totalPrice}$
          </OrderPriceStyle>
          <OrderSubmitBtnStyle
            className="btn-submit"
            onClick={handleSubmit}
            disabled={!cartList.length}
          >
            Submit
          </OrderSubmitBtnStyle>
        </OrderSubmitBoxStyle>
      </OrderControlStyle>
    </ShoppingCartWrappStyle>
  );
}

export default ShoppingCartPage;
