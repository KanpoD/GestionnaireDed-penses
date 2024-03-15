import React, { useContext } from "react";
import { ExpenseContext } from "../context/Context";
import Item from "./Item";

const Table = () => {
  const { state } = useContext(ExpenseContext);
  const { expenses } = state;

  return (
    <>
      {expenses.length > 0 ? (
        <ul className="list">
          {expenses.map((expense) => {
            return (
              <Item
                key={expense.id}
                amount={expense.amount}
                category={expense.category}
                description={expense.description}
                id={expense.id}
              />
            );
          })}
        </ul>
      ) : (
        <span>Pas de dépense à afficher.</span>
      )}
    </>
  );
};
export default Table;