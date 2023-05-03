import React, { useState, useEffect } from "react";

import axios from 'axios'

import Avatar from "../../../assets/avatar.svg"
import Seta from '../../assets/seta.svg'
import Trash from '../../assets/lixeira.svg'


import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,


} from "./styled";

function Users() {
  //const users = [];
  const [users, setUsers] = useState([]);  //Criando um estado no react

 
  

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

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lixeira" /></button>
            </User>
          ))}
        </ul>
        <Button>
        <img alt="seta" src={Seta} /> Voltar 
        </Button>

      </ContainerItens>
    </Container>

  );
}


export default Users;