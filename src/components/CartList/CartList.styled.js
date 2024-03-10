import styled from "styled-components";

export const CartListStyle = styled.div`
  grid-area: c;
  max-height: 700px;
  padding: 20px 0;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  ul {
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;

    @media screen and (min-width: 768px) {
      padding: 0 20px;
    }
  }
`;
