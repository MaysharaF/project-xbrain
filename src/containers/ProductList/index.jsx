import React from "react";
import Card from "../Card";
import { Container, Content, Header, Title } from "./styles";

function ProductList(props) {
  const { products, handleSale } = props;
  return (
    <Container>
      <Header>
        <Title>Produtos</Title>
      </Header>
      <hr />
      <Content>
        {products.map((product, index) => (
          <Card {...product} key={product.id} handleSale={handleSale} />
        ))}
      </Content>
    </Container>
  );
}

export default ProductList;
