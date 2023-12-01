const ListAddress = ({ data, key }) => {
  return (
    <>
      <div className="pedidos">
        {/* <p>Endereço: #{key}</p> */}
        <p>
          Rua: {data.street}, nº {data.number}
        </p>
        <p>
          Complemento: {data.complement}, cep: {data.cep}
        </p>
        <p>
          Cidade: {data.city} - UF: {data.uf}
        </p>
      </div>
    </>
  );
};

export default ListAddress;
