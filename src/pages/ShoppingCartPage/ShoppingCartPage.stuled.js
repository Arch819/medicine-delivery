import styled from "styled-components";

export const ShoppingCartWrappStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 140px;
  grid-template-areas:
    "i i i i"
    "i i i i"
    "c c c c"
    "c c c c"
    "t t t t";

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    grid-template-areas:
      "i i c c"
      "i i c c"
      "i i c c"
      "i i t t";
  }
`;

export const OrderControlStyle = styled.div`
  grid-area: t;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  padding: 20px 0 20px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DiscountControllerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const UseDiscountFormStyle = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  & input {
    padding: 8px 30px 8px 8px;
  }
  & button {
    position: absolute;
    top: 50%;
    right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    background: transparent;
    font-size: 26px;
    border-left: var(--border);
  }
`;

export const AddCouponToOrderStyle = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px 14px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background: transparent;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
  @media screen and (min-width: 768px) {
    padding: 10px 34px;
    font-size: 20px;
  }
`;

export const OrderSubmitBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const OrderPriceStyle = styled.p`
  position: relative;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;

  &::after {
    display: ${({ $discount }) => ($discount ? "block" : "none")};
    content: attr(title);
    position: absolute;
    top: -80%;
    right: 0%;
    border-radius: var(--border-radius);

    font-size: 16px;
    color: #ff1a1a;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const OrderSubmitBtnStyle = styled.button`
  position: relative;
  padding: 10px 38px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background: transparent;

  font-size: 22px;
  font-weight: 600;
  line-height: 1.1;

  &::after {
    display: ${({ disabled }) => (disabled ? "block" : "none")};
    content: "Add items to cart, please";
    position: absolute;
    top: -120%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 6px;
    border: 1px solid #ff6666;
    border-radius: var(--border-radius);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;

    font-size: 14px;
  }

  &:hover::after {
    visibility: visible;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 64px;

    &::after {
      top: -100%;

      width: auto;
    }
  }
`;
