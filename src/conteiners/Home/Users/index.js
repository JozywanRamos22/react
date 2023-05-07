import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import Avatar from "../../../assets/avatar.svg"
import Seta from "../../../assets/seta.svg"
import Trash from "../../../assets/lixeira.svg"
import H1 from "../../../components/Titile"
import ContainerItens  from "../../../components/Titile/ConteinerItens";
import Button from "../../../components/Titile/Button";
import {
  Container,
  Image,
  User,


} from "./styled";

function Users() {
  //const users = [];
  const [users, setUsers] = useState([]);  //Criando um estado no react
  const history = useHistory() // navegando entre telas com o hostory
 

  useEffect(() => { // userEffect não aceita "async e await", preciso criar uma função async 
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users"); // recuperanoo todo usuários

      setUsers(newUsers);
    }

    fetchUsers()

  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }
  function goBackPage(){
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lixeira" /></button>
            </User>
          ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
        <img alt="seta" src={Seta} /> Voltar 
        </Button>

      </ContainerItens>
    </Container>

  );
}


export default Users;