import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  top: 0;
  position: fixed;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.div`
  margin: 0;
  display: block;
  width: 60%;
  height: 40%;
  background-repeat: no-repeat;
  background-size: center;
  background-size: 225px;
  margin: 35px 0;
`;
export const Content = styled.div`
  width: 384px;
  height: 473px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameClient = styled.div`
  font-size: 20px;
  color: var(--primary-text);
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: var(--primary-text);
  font-weight: 300;

  strong {
    color: #019cdf;
  }
`;

export const StyledButton = styled.button`
  display: block;
  color: white;
  border: 0;
  font-size: 14px;
  background: #ff9800;
  width: 211px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
`;
