import { useState, useEffect } from "react";
import "./style.css";
import HeaderText from "../../components/HeaderText";

import { UseApi } from "../../services/api";

export default function Dados() {
  const [last_name, setLastName] = useState("");
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");

  const api = UseApi();

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const storageData = localStorage.getItem("UserId");
    const user = await api.findUserById(storageData);
    setLastName(user.data.user.last_name);
    setName(user.data.user.first_name);
    setEmail(user.data.user.email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const storageData = localStorage.getItem("UserId");
    const userdata = await api.findUserById(storageData);
    const type_of_user = userdata.data.user.type_of_user;
    const address = userdata.data.user.address;
    const documents = userdata.data.user.documents;

    const data = {
      first_name,
      last_name,
      email,
      type_of_user,
      address,
      documents,
    };
    const user = await api.updateUser(data, storageData);
    recuperaDados();
    console.log(user);
  }

  return (
    <>
      <div className="container">
        <HeaderText nomeClass="dados" />
        <main>
          <div className="pesq">
            <h1>Meus Dados</h1>
            <form onSubmit={handleSubmit}>
              <span>Nome:</span>
              <input
                type="text"
                placeholder="Nome"
                id="first-name"
                name="fullname"
                value={first_name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>Sobrenome:</span>
              <input
                type="text"
                placeholder="Sobrenome"
                id="last-name"
                name="last-name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span>email:</span>
              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="submit" placeholder="Atualizar" value="atualizar" />
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
