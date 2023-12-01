import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import HeaderText from "../../components/HeaderText";
import Footer from "../../components/Footer";

import ListAddress from "./ListAddress";

import { UseApi } from "../../services/api";

export default function Dados() {
  const [user_name, setUserName] = useState("");
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dtBirth, setDtBirth] = useState(null);
  const [genderSel, setGender] = useState("");
  const [notify, setNotify] = useState("");
  const [addressList, setAddressList] = useState([]);

  const api = UseApi();

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const storageData = localStorage.getItem("UserId");
    const user = await api.findUserById(storageData);
    const vrAge = new Date(user.data.user.date_of_birth);
    const nGender = user.data.user.gender;
    const Address = user.data.user.address;

    if (vrAge == null) {
      setDtBirth(null);
    } else {
      setDtBirth(vrAge);
    }

    console.log(Address);
    if (Address == null) {
      setAddressList([]);
    } else {
      setAddressList(Address);
    }

    nGender === "M" ? setGender("MASCULINO") : setGender("FEMININO");

<<<<<<< HEAD
    setLastName(user.data.user.last_name);
    setName(user.data.user.first_name);
    setEmail(user.data.user.email);
    console.log(user.data.user.address[0]);
=======
    setUserName(user.data.user.user_name);
    setName(user.data.user.first_name);
    setEmail(user.data.user.email);
>>>>>>> fabricio-frontend
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const storageData = localStorage.getItem("UserId");
<<<<<<< HEAD
    const userdata = await api.findUserById(storageData);
    const type_of_user = userdata.data.user.type_of_user;
    const gender = genderSel === "MASCULINO" ? "M" : "F";

=======
    const gender = genderSel === "MASCULINO" ? "M" : "F";

    const newData = new Date(dtBirth);
    const birth =
      newData.getFullYear() +
      "/" +
      (newData.getMonth() + 1) +
      "/" +
      newData.getDate();

>>>>>>> fabricio-frontend
    // Validar campos
    setNotify("");
    // nome
    if (!first_name) {
      setNotify("Preencha o campo nome!");
      return false;
    }
    // Sobrenome
<<<<<<< HEAD
    if (!last_name) {
=======
    if (!user_name) {
>>>>>>> fabricio-frontend
      setNotify("Preencha o campo sobrenome!");
      return false;
    }
    // idade
<<<<<<< HEAD
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
=======
    if (!birth) {
      setNotify("Preencha o campo data Nascimento!");
      return false;
    }

    // let anoAtual = dataAtual.getFullYear();
    const DataAge = new Date();
    let age = DataAge.getFullYear() - dtBirth.getFullYear();

    if (age > 0 && age < 18) {
      age = "18-";
    } else if (age >= 18 && age < 25) {
      age = "18 e 25";
    } else if (age >= 25 && age < 30) {
      age = "25 e 30";
    } else if (age >= 30 && age < 40) {
      age = "30 e 40";
    } else if (age >= 40 && age < 60) {
      age = "40 e 60";
    } else if (age >= 60) {
      age = "60+";
    } else {
      age = null;
    }
    // const date = await new date();
    // const currentYear = date.getFullYear();

    // if (dtBirth == 0 || dtBirth > 100) {
    //   setNotify("Preencha idade válida!");
    //   return false;
    // }

    const data = {
      first_name,
      user_name,
      date_of_birth: birth,
      gender,
      age,
    };
    await api.updateUser(data, storageData);
    recuperaDados();
    setNotify("Dados salvos com sucesso!");
>>>>>>> fabricio-frontend
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
<<<<<<< HEAD
              <label htmlFor="first_name">Nome</label>
=======
              <label htmlFor="first_name">Apelido</label>
>>>>>>> fabricio-frontend
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
<<<<<<< HEAD
              <label htmlFor="last-name">Sobrenome</label>
=======
              <label htmlFor="last-name">Nome completo</label>
>>>>>>> fabricio-frontend
              <input
                type="text"
                placeholder="Digite o sobrenome"
                id="last-name"
                name="last-name"
<<<<<<< HEAD
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
=======
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="half-box spacing">
              <label htmlFor="date_of_birth">Data Nascimento</label>
              <DatePicker
                selected={dtBirth}
                id="date_of_birth"
                name="date_of_birth"
                onChange={(date) => setDtBirth(date)}
                dateFormat="dd/MM/yyyy"
>>>>>>> fabricio-frontend
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
<<<<<<< HEAD
      </main>
=======
        <div id="linha-horizontal"></div>
        <Link to="/address" className="linkaddress">
          Cadastrar endereço
        </Link>
        <h2>Endereços</h2>
        <div className="scrolladrres">
          {addressList.map((item) => (
            <ListAddress data={item} key={item.index} />
          ))}
        </div>
      </main>
      <Footer />
>>>>>>> fabricio-frontend
    </>
  );
}
