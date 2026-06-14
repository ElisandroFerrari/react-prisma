import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from "./styles";

import TopBackground from "../../components/TopBackground";
import Button from "../../components/Button";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value), // Adicionei parseInt caso a API exija número
      email: inputEmail.current.value,
    });

    alert("Usuário cadastrado com sucesso!");
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInput>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInput>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
        Usuarios Cadastrados
      </Button>
    </Container>
  );
}

export default Home;
