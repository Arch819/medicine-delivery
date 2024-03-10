import styled from "styled-components";

export const HistoryOrderItemStyle = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 20px;
  padding: 10px 10px 0;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  @media screen and (min-width: 1440px) {
    padding: 20px 20px 0;
  }
`;

export const HistoryOrderMedicineListStyle = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 16px;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const HistoryOrderMedicineItemStyle = styled.li`
  min-width: 140px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  & img {
    width: 120px;
    border-radius: 4px;
  }

  & div {
    padding: 4px;
  }

  & h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.1;
    text-align: center;
  }

  & p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    min-width: 300px;
    min-height: 120px;
    flex-direction: row;
    align-items: center;

    img {
      width: 180px;
    }
    & div {
      padding: 10px;
    }
  }
  @media screen and (min-width: 1440px) {
    min-width: 320px;
    min-height: 120px;
    flex-direction: row;
    align-items: center;

    img {
      width: 180px;
    }
    & div {
      padding: 10px;
    }
  }
`;

export const HistoryOrderTotalPriceStyle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;
