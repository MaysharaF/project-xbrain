import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin: 10px 30px;
  justify-content: center;
  justify-items: center;
  border-radius: 4px;
  margin-bottom: 20px;

  :hover {
    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 70%;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  padding: 0 10px;
  .productQuantity {
    display: none;
  }
  :hover {
    z-index: 1;
    transform: translateY(-100px);
    background: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: bold;
    transition: 0.5s;
    .productQuantity {
      display: block;
    }
  }
`;

export const ProductQuantity = styled.div``;

export const Image = styled.div`
  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.label`
  font-size: 14px;
  color: var(--primary-text);
`;

export const Price = styled.label`
  color: var(--primary-text);
  font-weight: bold;
  font-size: 18px;
  margin: 7px 0 7px 0;
`;

export const Description = styled.label`
  color: var(--secondary-text);
  font-size: 12px;
`;

export const QuantityForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  input {
    text-align: center;
    font-size: 20px;
    height: 15px;
    color: var(--primary-text);
  }
`;

export const StyledButton = styled.button`
  display: block;
  color: #546e7a;
  border: 0;
  font-size: 14px;
  background: #b0bec5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  :hover {
    background: #98a7ae;
  }
`;

export const AddButton = styled.button`
  display: block;
  color: white;
  border: 0;
  font-size: 14px;
  background: #019cdf;
  width: 170px;
  height: 40px;
  font-size: 16px;
  border-radius: 4px;

  :hover {
    background: #24a0d5;
  }
`;
