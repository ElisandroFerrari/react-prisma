import { useRef } from 'react'
import api from '../../services/api'

import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from './styles'

import UserImage from '../../assets/users.png'
// Corrigido para o caminho da nova pasta que criamos
import Button from '../../components/Button'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser() {
    await api.post('/usuarios', { 
      name: inputName.current.value,
      age: parseInt(inputAge.current.value), // Adicionei parseInt caso a API exija número
      email: inputEmail.current.value
    }) 

    alert("Usuário cadastrado com sucesso!")
  }
    
  return (
    <Container>
      <TopBackground>
        <img src={UserImage} alt="Imagem-usuários" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInput>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInput>
        
        <div style={{ width: '100%' }}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  )
}

export default Home