import styled from "styled-components";

export const ShopsBarStyle = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    padding: 20px 0;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
  }
`;

export const ShopsResetBtnStyle = styled.button`
  position: absolute;
  top: 10px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;

  font-size: 22px;
  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

export const ShopsBarTittle = styled.h2`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const ShopsListStyle = styled.ul`
  max-width: 375px;
  display: flex;
  padding-left: 5px;
  padding-right: 25px;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 16px;
  }
  &::-webkit-scrollbar-track {
    margin-left: 5px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
    height: calc(100% - 50px);
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    overflow-x: hidden;
    &::-webkit-scrollbar-track {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
`;

export const ShopItemStyle = styled.li``;

export const ShopItemBtnStyle = styled.button`
  padding: 4px 12px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  @media screen and (min-width: 768px) {
    width: 180px;
    padding: 12px 0;
    font-size: 20px;
  }
`;
