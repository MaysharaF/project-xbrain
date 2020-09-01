import React from "react";
import {
  Container,
  Content,
  NameClient,
  Description,
  StyledButton,
  Image,
} from "./styles";
import ImgFinishSale from "../../assets/img/purchase.png";

function Modal({ isOpen, client, total, setState }) {
  return (
    <Container isOpen={isOpen}>
      <Content>
        <NameClient>{client},</NameClient>
        <Description>
          Sua compra no valor <strong>R$ {total}</strong>
          <br />
          foi finalizado com sucesso
        </Description>
        <Image style={{ backgroundImage: `url(${ImgFinishSale})` }} alt="" />
        <StyledButton onClick={() => setState(false)}>
          INICIAR NOVA COMPRA
        </StyledButton>
      </Content>
    </Container>
  );
}

export default Modal;
