import { IoMdClose } from "react-icons/io";

import defaultImg from "../../images/default.png";
import {
  CartItemDeleteBtnStyle,
  CartItemInputStyle,
  CartItemStyle,
  CartItemTextStyle,
  CartItemTitleStyle,
} from "./CartItem.styled";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteMedicine } from "store/Cart/cartSlice";

function CartItem({ data }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.valueAsNumber;
    dispatch(changeQuantity({ id: data._id, value }));
    if (value < 1) {
      dispatch(deleteMedicine(data._id));
    }
  };

  return (
    <CartItemStyle>
      <CartItemDeleteBtnStyle
        onClick={() => dispatch(deleteMedicine(data._id))}
        aria-label="Remove medicine from cart"
      >
        <IoMdClose />
      </CartItemDeleteBtnStyle>
      <img src={data.img ?? defaultImg} alt="data.title" />
      <div>
        <CartItemTitleStyle>{data.title}</CartItemTitleStyle>
        <CartItemTextStyle>Price: {data.price}$</CartItemTextStyle>
        <CartItemInputStyle
          value={data.quantity}
          min={0}
          type="number"
          name="price"
          onChange={handleChange}
        />
      </div>
    </CartItemStyle>
  );
}

export default CartItem;
