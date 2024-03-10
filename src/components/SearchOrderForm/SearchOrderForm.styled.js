import styled from "styled-components";

export const SearchOrderWrappStyle = styled.div`
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
`;

export const SearchOrderBtnListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto 30px;
  padding-bottom: 10px;
  border-bottom: var(--border);
  @media screen and (min-width: 1440px) {
    width: 50%;
    gap: 40px;
  }
`;

export const VariantFormBtnStyle = styled.button`
  padding: 8px 24px;
  border: 1px solid;
  border-color: ${({ $active }) => ($active ? "#11aeff" : "transparent")};
  border-radius: var(--border-radius);
  background: transparent;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
  }
`;

export const SearchOrderFormStyle = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`;

export const SearchFormLabelStyle = styled.label`
  position: relative;
  width: 100%;
  max-width: 400px;

  & span {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.1;
  }

  & input {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 12px 8px;
    font-size: 16px;
  }
  &:focus,
  & input:is(:hover, :focus, ) + span,
  & input:not(:placeholder-shown) + span {
    transform: translateY(-250%);
  }
`;

export const SearchOrderSubmitBtnStyle = styled.button`
  padding: 12px 64px;
  border: 1px solid;
  border-radius: var(--border-radius);
  background: transparent;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
`;
