import { useState, useEffect } from "react";
import "./style.css";
import HeaderText from "../../components/HeaderText";

import { UseApi } from "../../services/api";

export default function Dados() {
  const [last_name, setLastName] = useState("");
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [genderSel, setGender] = useState("");
  const [notify, setNotify] = useState("");

  const api = UseApi();

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const storageData = localStorage.getItem("UserId");
    const user = await api.findUserById(storageData);
    const vrAge = user.data.user.age;
    const nGender = user.data.user.gender;
    if (vrAge == 0) {
      setAge("");
    } else {
      setAge(vrAge);
    }

    nGender === "M" ? setGender("MASCULINO") : setGender("FEMININO");

    setLastName(user.data.user.last_name);
    setName(user.data.user.first_name);
    setEmail(user.data.user.email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const storageData = localStorage.getItem("UserId");
    const userdata = await api.findUserById(storageData);
    const type_of_user = userdata.data.user.type_of_user;
    const gender = genderSel === "MASCULINO" ? "M" : "F";

    // Validar campos
    setNotify("");
    // nome
    if (!first_name) {
      setNotify("Preencha o campo nome!");
      return false;
    }
    // Sobrenome
    if (!last_name) {
      setNotify("Preencha o campo sobrenome!");
      return false;
    }
    // idade
    if (!age) {
      setNotify("Preencha o campo idade!");
      return false;
    }
    if (age == 0 || age > 100) {
      setNotify("Preencha idade válida!");
      return false;
    }

    const data = {
      first_name,
      last_name,
      type_of_user,
      age,
      gender,
    };
    await api.updateUser(data, storageData);
    recuperaDados();
  }

  return (
    <>
      <HeaderText nomeClass="dados" />
      <main>
        <div className="dados">
          <h1>Meus Dados</h1>
          <form onSubmit={handleSubmit}>
            <div className="full-box">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={true}
              />
            </div>

            <div className="half-box spacing">
              <label htmlFor="first_name">Nome</label>
              <input
                type="text"
                placeholder="Digite o nome"
                id="first-name"
                name="fullname"
                value={first_name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="half-box">
              <label htmlFor="last-name">Sobrenome</label>
              <input
                type="text"
                placeholder="Digite o sobrenome"
                id="last-name"
                name="last-name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="half-box spacing">
              <label htmlFor="age">Idade</label>
              <input
                type="number"
                placeholder="digite sua idade"
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="half-box">
              <label htmlFor="gender">Genero</label>
              <select
                name="estadocivil"
                className="dropdown"
                value={genderSel}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option selected disabled>
                  Selecione
                </option>
                <option value="MASCULINO" name="gender">
                  Masculino
                </option>
                <option value="FEMININO" name="gender">
                  Feminino
                </option>
              </select>
            </div>
            <div className="full-box">
              <input type="submit" id="btn-submit" value="atualizar" />
            </div>
            <p>{notify}</p>
          </form>
        </div>
      </main>
    </>
  );
}
