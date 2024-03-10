import styled from "styled-components";

export const CustomerInfoStyle = styled.div`
  grid-area: i;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 30px 10px 10px;

  @media screen and (min-width: 768px) {
    padding: 30px 120px 20px;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px 100px 40px;
  }
`;

export const CustomerInfoFormStyle = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 1440px) {
    justify-content: end;
    gap: 40px;
  }
`;

export const FormLabelStyle = styled.label`
  position: relative;

  & span {
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.1;
  }

  & input {
    width: 100%;
    padding: 8px 4px;
    font-size: 16px;
  }

  & input:is(:hover, :focus) + span,
  & input:not(:placeholder-shown) + span {
    transform: translateY(-250%);
  }

  @media screen and (min-width: 768px) {
    & span {
      left: 8px;
      font-size: 18px;
    }
    & input {
      padding: 12px 8px;
      font-size: 18px;
    }
  }
`;
