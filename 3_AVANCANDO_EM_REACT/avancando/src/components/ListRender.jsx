import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["João", "Bruna", "Barata", "Ana"]);

    const [users, setUsers] = useState([
      {id: 1, nome: "João", age: 20},
      {id: 2, nome: "Bruna", age: 20},
      {id: 3, nome: "Barata", age: 21},
      {id: 4, nome: "Ana", age: 21}
    ]);

    const deleteRandom = () => {

      const randomNumber = Math.floor(Math.random() * 5)

      setUsers((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
  <div>
    {/* 4 - render sem key */}
    <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
    {/* 5 - render com key */}
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.nome} - {user.age} anos</li>
      ))}
    </ul>
    {/* 6 - previous state */}
    <button onClick={deleteRandom}>Delete random user</button>
  </div>
  );
};

export default ListRender