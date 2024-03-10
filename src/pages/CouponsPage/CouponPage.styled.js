import styled from "styled-components";

export const CouponListStyle = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 10px 0 10px 16px;
  box-shadow: var(--box-shadow);
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;
