import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  hr {
    color: var(--secondary-text);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 10%;
`;

export const Title = styled.label`
  font-size: 24px;
  color: var(--primary-text);
  font-weight: bold;
  margin-left: 148px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: var(--background-primary);
  height: 90%;
  overflow-y: scroll;
  margin-left: 108px;
`;
