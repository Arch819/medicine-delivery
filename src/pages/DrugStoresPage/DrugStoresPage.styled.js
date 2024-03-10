import styled from "styled-components";

export const DrugStoresPageWrappStyle = styled.div`
  display: grid;
  grid-template-rows: 100px minmax(auto, 85%);
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-rows: 100%;
    grid-template-columns: 2fr 3fr;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 3fr;
  }
`;
