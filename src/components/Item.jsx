import React, { useContext } from "react";
import { ExpenseContext } from "../context/Context";

const Item = ({ id, amount, category, description }) => {
  const { dispatch } = useContext(ExpenseContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <p>{amount} &euro;</p>
      <p>{category}</p>
      <p>{description}</p>
      <button onClick={handleDelete}>Supprimer</button>
    </li>
  );
};

export default Item;
