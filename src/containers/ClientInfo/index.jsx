import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Container, Header, InfoContainer, Title } from "./styles";

function ClientInfo({ handleClient, client, email, gender }) {
  return (
    <Container>
      <Header>
        <Title>Dados do Cliente</Title>
      </Header>

      <InfoContainer>
        <TextField
          autoComplete="off"
          onChange={({ target: { value, name } }) => handleClient(name, value)}
          label="Nome"
          name="client"
          placeholder="Nome do cliente aqui"
          variant="outlined"
          value={client}
          type="text"
          style={{ width: "459px" }}
        />
        <TextField
          autoComplete="off"
          onChange={({ target: { value, name } }) => handleClient(name, value)}
          label="Email"
          value={email}
          name="email"
          variant="outlined"
          placeholder="Digite seu email aqui"
          type="email"
          style={{ width: "459px" }}
        />
        <FormControl variant="outlined">
          <InputLabel>Sexo</InputLabel>
          <Select
            label="Sexo"
            name="gender"
            value={gender}
            onChange={({ target: { value, name } }) =>
              handleClient(name, value)
            }
            style={{ width: "174px" }}
          >
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Feminino">Feminino</MenuItem>
          </Select>
        </FormControl>
      </InfoContainer>
    </Container>
  );
}

export default ClientInfo;
