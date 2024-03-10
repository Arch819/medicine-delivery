import styled from "styled-components";

export const CartItemStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  & img {
    width: 180px;
    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    & img {
      width: 280px;
    }
  }
`;

export const CartItemDeleteBtnStyle = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  font-size: 20px;
`;

export const CartItemTitleStyle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const CartItemTextStyle = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const CartItemInputStyle = styled.input`
  padding: 4px 0;
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 8px 0;
    font-size: 18px;
  }
`;
