import React, { useState, useRef,  } from "react";
import { useHistory } from "react-router-dom"
import axios from 'axios'

import People from "../../assets/people.svg";
import Seta from "../../assets/seta.svg";

import H1 from "../../components/Titile"

import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  


} from "./styled";

function App() {
  //const users = [];
  const [users, setUsers] = useState([]);  //Criando um estado no react
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { // endereço do meu back-end
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    

    setUsers([...users, newUser]);
    history.push("/usuarios")

  }


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Seta} />
        </Button>
      
      </ContainerItens>
    </Container>

  );
}


export default App;