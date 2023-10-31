import React from "react";

const TableRow = ({ data, handleRemoveItem, handleUpdateItem }) => {
  return (
    <tr>
      <td key={data.id}>
        <div className="product">
          <img src="https://picsum.photos/100/200" alt="" />
          <div className="info">
            <div className="name">{data.food_name}</div>
            <div className="category">{data.restaurant_name}</div>
          </div>
        </div>
      </td>
      <td>R$ {data.price}</td>
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
      <td>R$ {data.price * data.quantity}</td>
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
