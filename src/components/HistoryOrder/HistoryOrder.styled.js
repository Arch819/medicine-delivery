import styled from "styled-components";

export const HistoryOrderListStyle = styled.ul`
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    padding: 20px;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
  }
`;
