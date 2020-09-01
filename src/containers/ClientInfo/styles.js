import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
`;

export const Title = styled.label`
  font-size: 24px;
  color: var(--primary-text);
  font-weight: bold;
  margin-left: 148px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90%;
  padding: 5%;
  justify-content: space-around;
`;
