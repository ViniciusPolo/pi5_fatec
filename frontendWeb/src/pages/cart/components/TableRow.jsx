const TableRow = ({ data, handleRemoveItem, handleUpdateItem }) => {
  return (
    <tr>
      <td key={data.id}>
        <div className="product">
          <img src={data.menu_owner.logo} alt="" />
          <div className="info">
            <div className="name">{data.menu_owner.food_name}</div>
            <div className="category">{data.menu_owner.type_of_product}</div>
          </div>
        </div>
      </td>
      <td>
        {data.menu_owner.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td>
        <div className="qty">
          <button
            onClick={() => {
              handleUpdateItem(data, "decrease");
            }}
          >
            <i className="bx bx-minus"></i>
          </button>
          <span>{data.quantity}</span>
          <button
            onClick={() => {
              handleUpdateItem(data, "increase");
            }}
          >
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>
        {(data.menu_owner.price * data.quantity).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td>
        <button
          className="remove"
          onClick={() => {
            handleRemoveItem(data);
          }}
        >
          <i className="bx bxs-trash" style={{ color: "#b72020" }}></i>
          {/* <i class='bx bxs-trash bx-flashing bx-flip-horizontal' style='color:#b72020' ></i> */}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
