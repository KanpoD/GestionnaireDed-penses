import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/Context";
import Item from "./Item";
import ExpenseFilter from "./ExpenseFilter";
import { CategoriesTable } from "../components/CategoriesTable";

const Table = () => {
  const filterCategory = (dataFromChild) => {
    setParentData(dataFromChild);
  };
  const { state } = useContext(ExpenseContext);
  const { expenses } = state;
  const [parentData, setParentData] = useState("");

  const filteredExpenses = parentData
    ? expenses.filter((expense) => expense.category === parentData)
    : expenses;

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="table">
      <ExpenseFilter filter={filterCategory} />
      <CategoriesTable />
      {expenses.length > 0 ? (
        <ul className="list">
          {expenses.map((expense) => {
            if (parentData !== "" && parentData != expense.category) {
              return;
            }
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
        <span className="nodata">Pas de dépense à afficher.</span>
      )}
      <div className="total">Total des dépenses : {totalExpenses} €</div>
    </div>
  );
};
export default Table;
