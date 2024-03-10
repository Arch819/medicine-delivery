import styled from "styled-components";

export const FilterMedicineFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  padding: 0 15px 0 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    padding: 0 45px 0 40px;
  }
`;

export const FilterFormLabelStyle = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  & span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.1;
    margin-right: 10px;
  }
  input {
    width: 100%;
    display: block;
    padding: 8px;
    font-size: 16px;
    outline: none;
  }
`;

export const FilterFromToBoxStyle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  box-shadow: var(--box-shadow-input-btn);
  border-radius: 8px 0 0 8px;

  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.1;
  }
  input {
    background: transparent;
    border: none;
    padding-left: 0;
    box-shadow: none;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const FilterBtnBoxStyle = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const FilterSubmitBtnStyle = styled.button`
  background: transparent;
  box-shadow: var(--box-shadow-input-btn);
  padding: 8px 22px;
  border-radius: var(--border-radius);

  font-size: 16px;
  color: #000;
`;
