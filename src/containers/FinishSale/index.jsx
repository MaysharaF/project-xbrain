import React from "react";
import { Container, SaleInfo, StyledButton } from "./styles";

function FinishSale({ total, submitSale }) {
  return (
    <Container>
      <SaleInfo>Total: R$ {total}</SaleInfo>
      <StyledButton onClick={() => submitSale()}>FINALIZAR COMPRA</StyledButton>
    </Container>
  );
}

export default FinishSale;
