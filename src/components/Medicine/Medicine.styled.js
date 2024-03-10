import styled from "styled-components";

export const MedicineContainer = styled.div`
  display: grid;
  max-height: 100%;
  max-width: 335px;
  overflow-y: hidden;
  padding: 20px 0;
  @media screen and (min-width: 768px) {
    max-width: none;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
  }
  @media screen and (min-width: 1440px) {
    grid-template-rows: 60px auto;
  }
`;

export const MedicineListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding-left: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 30px 0 40px;
    gap: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;
