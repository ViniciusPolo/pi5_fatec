import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderText from "../../components/HeaderText";

import { UseApi } from "../../services/api";

export default function Address() {
  const [street, setStreet] = useState("");
  const [numbStreet, setNumbStreet] = useState("");
  const [cep, setCep] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [notify, setNotify] = useState("");

  const api = UseApi();
  const navigate = useNavigate();

  useEffect(() => {
    recuperaDados();
  }, []);

  let getAddress = [];
  async function recuperaDados() {
    const storageData = localStorage.getItem("UserId");
    const user = await api.findUserById(storageData);
    getAddress = user.data.user.address;
    console.log(getAddress);
  }

  async function handleSubmit(e) {
    const user = localStorage.getItem("UserId");
    e.preventDefault();

    const address = [
      {
        street: street,
        number: numbStreet,
        cep: cep,
        complement: complement,
        city: city,
        uf: stateAddress,
      },
    ];

    // validação de campos
    if (!street) {
      setNotify("Campo endereço não pode ser vazio");
      return false;
    }
    if (!numbStreet) {
      setNotify("Campo Número não pode ser vazio");
      return false;
    }
    if (!cep) {
      setNotify("Campo Cep não pode ser vazio");
      return false;
    }
    if (!city) {
      setNotify("Campo Cidade não pode ser vazio");
      return false;
    }
    if (!stateAddress) {
      setNotify("Campo UF não pode ser vazio");
      return false;
    }
    await api.updateAddress(user, address);

    navigate("/dados");
    console.log("address");
  }

  return (
    <>
      <HeaderText nomeClass="dados" />
      <main>
        <div className="dados">
          <h1>Formulario de endereços</h1>
          <form onSubmit={handleSubmit}>
            <div className="full-box">
              <label htmlFor="street">Endereço</label>
              <input
                type="text"
                placeholder="nome da Rua, av. etc"
                id="street"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="half-box">
              <label htmlFor="number">Nº</label>
              <input
                type="number"
                placeholder="número"
                id="number"
                name="number"
                value={numbStreet}
                onChange={(e) => setNumbStreet(e.target.value)}
              />
            </div>
            <div className="half-box">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                placeholder="00.000-000"
                id="cep"
                name="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <div className="full-box">
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                placeholder="apto, casa 1, etc"
                id="complement"
                name="complement"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>
            <div className="half-box">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                placeholder="nome da cidade"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="half-box">
              <label htmlFor="state">UF:</label>
              <input
                type="text"
                placeholder="estado"
                id="state"
                name="state"
                value={stateAddress}
                onChange={(e) => setStateAddress(e.target.value)}
              />
            </div>
            <div className="half-box">
              <input type="submit" id="btn-submit" value="Cadastrar" />
            </div>
          </form>
          <p>{notify}</p>
        </div>
      </main>
    </>
  );
}
