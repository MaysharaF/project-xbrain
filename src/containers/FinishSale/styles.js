import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

export const SaleInfo = styled.label`
  font-size: 24px;
  color: var(--primary-text);
  margin-bottom: 6px;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  display: block;
  color: white;
  border: 0;
  font-size: 14px;
  background: #ff9800;
  width: 186px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background: #faa323;
  }
`;
