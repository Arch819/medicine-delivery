import { CartListStyle } from "./CartList.styled";
import EmptyMessage from "components/EmptyMessage";
import CartItem from "components/CartItem";

function CartList({ cartList, calcTotalPrice }) {
  return (
    <CartListStyle>
      {cartList.length ? (
        <ul className="cart-list">
          {cartList.map((item) => (
            <CartItem
              key={item._id}
              data={item}
              calcTotalPrice={calcTotalPrice}
            />
          ))}
        </ul>
      ) : (
        <EmptyMessage something="Cart is empty" />
      )}
    </CartListStyle>
  );
}

export default CartList;
