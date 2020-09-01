import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  ProductImage,
  ProductDescription,
  Image,
  Price,
  Description,
  Title,
  ProductQuantity,
  StyledButton,
  QuantityForm,
  AddButton,
} from "./styles";

function Card(props) {
  const {
    id,
    name,
    price,
    image,
    withParcel,
    withoutParcel,
    handleSale,
  } = props;

  const [quantity, setQuantity] = useState(0);

  const handleClick = (type) => {
    if (type === "remove") {
      const newQuantity = quantity - 1;
      if (newQuantity > -1) {
        setQuantity(newQuantity);
      }
    } else {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }
  };

  const handleSubmit = (id, price, quantity) => {
    handleSale(id, price * quantity, quantity);
  };

  return (
    <Container>
      <ProductImage className="productImage">
        <Image style={{ backgroundImage: `url(${image})` }} />
      </ProductImage>

      <ProductDescription className="productDescription">
        <Title>{name}</Title>
        <Price>R$ {price.toFixed(2)}</Price>
        <Description>{withParcel}</Description>
        <Description>{withoutParcel}</Description>
        <ProductQuantity className="productQuantity">
          <QuantityForm>
            <StyledButton onClick={() => handleClick("remove")}>-</StyledButton>
            <TextField
              variant="outlined"
              style={{ width: "125px" }}
              value={quantity}
            />
            <StyledButton onClick={() => handleClick("add")}>+</StyledButton>
          </QuantityForm>
          <AddButton
            style={{ width: "100%" }}
            onClick={() => handleSubmit(id, price, quantity)}
          >
            ADICIONAR
          </AddButton>
        </ProductQuantity>
      </ProductDescription>
    </Container>
  );
}

export default Card;
