import styled from "styled-components";

export const CouponItemStyle = styled.li`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 10px;

  & img {
    width: 100%;
    border-radius: var(--border-radius);
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 10px) / 2);
    & img {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 60px) / 4);
  }
`;
export const CouponItemTitleStyle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 10px;
`;

export const CouponItemBtnStyle = styled.button`
  display: block;
  margin-left: auto;
  padding: 8px 46px;
  background: transparent;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  font-size: 18px;
  line-height: 1.4;
`;
