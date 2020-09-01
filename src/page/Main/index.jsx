import React, { useState } from "react";
import ProductList from "../../containers/ProductList";
import FinishSale from "../../containers/FinishSale";
import ClientInfo from "../../containers/ClientInfo";
import { products } from "../../data.js";
import Modal from "../../components/Modal";
//kjhgvkgh
import {
  Container,
  FinishSaleContainer,
  ProductsContainer,
  UserInfoContainer,
} from "./styles";

function Main() {
  const [sale, setSale] = useState({
    client: "",
    email: "",
    gender: "",
    total: 0,
    cart: [],
  });

  const [modalState, setModal] = useState(false);

  const handleSale = (id, price, quantity) => {
    if (!sale.cart.length && quantity) {
      return setSale({
        ...sale,
        total: price,
        cart: [
          {
            id,
            price,
            quantity,
          },
        ],
      });
    }
    const productOnCart = sale.cart.find((product) => product.id === id);
    if (productOnCart) {
      const totalWithOutProduct = sale.total - productOnCart.price;
      if (!quantity) {
        const newCart = sale.cart.filter((product) => product.id !== id);
        return setSale({
          ...sale,
          total: totalWithOutProduct,
          cart: newCart,
        });
      } else {
        const newCart = sale.cart.filter((product) => product.id !== id);
        return setSale({
          ...sale,
          total: totalWithOutProduct + price,
          cart: [...newCart, { id, price, quantity }],
        });
      }
    } else {
      if (quantity) {
        const newTotal = sale.total + price;
        const newCart = [...sale.cart, { id, price, quantity }];
        return setSale({
          ...sale,
          total: newTotal,
          cart: newCart,
        });
      }
    }
  };

  const submitSale = () => {
    if (!sale.client || !sale.total || !sale.email) {
      return;
    }
    setModal(!modalState);
  };

  const handleClient = (prop, value) => {
    setSale({ ...sale, [prop]: value });
  };
  return (
    <Container>
      <ProductsContainer>
        <ProductList products={products} handleSale={handleSale} />
      </ProductsContainer>
      <UserInfoContainer>
        <ClientInfo
          handleClient={handleClient}
          client={sale.client}
          email={sale.email}
          gender={sale.gender}
        />
      </UserInfoContainer>
      <FinishSaleContainer>
        <FinishSale total={sale.total} submitSale={submitSale} />
      </FinishSaleContainer>

      <Modal
        isOpen={modalState}
        client={sale.client}
        total={sale.total}
        setState={setModal}
      ></Modal>
    </Container>
  );
}

export default Main;
