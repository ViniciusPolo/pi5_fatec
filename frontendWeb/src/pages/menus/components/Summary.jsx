const Summary = ({ total }) => {
  return (
    <>
      <div className="box">
        <div className="cartheader">Resumo da compra</div>
        <div className="info">
          <div>
            <span>Sub-total</span>
            <span>R$ {total}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <button>
              Adicionar cupom de desconto
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <div className="cartfooter">
          <span>Total</span>
          <span>R$ {total}</span>
        </div>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
};

export default Summary;
