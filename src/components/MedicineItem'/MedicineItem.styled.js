import styled from "styled-components";

export const MedicineItemStyle = styled.li`
  padding: 10px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 2);
  }
`;

export const MedicineImgBoxStyle = styled.div`
  margin-bottom: 10px;
  & img {
    width: 100%;
    border-radius: var(--border-radius);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const MedicineInfoBoxStyle = styled.div`
  position: relative;
`;
export const MedicineFavoriteBtnStyle = styled.button`
  position: absolute;
  top: 0px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: 28px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const MedicineItemTitleStyle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 10px;
`;
export const MedicineItemBtnStyle = styled.button`
  display: block;
  margin-left: auto;
  padding: 8px 32px;
  background: transparent;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  font-size: 18px;
  line-height: 1.4;
`;
