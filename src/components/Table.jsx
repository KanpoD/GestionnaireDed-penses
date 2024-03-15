import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/Context";
import Item from "./Item";
import SelectCategory from "../components/SelectCategory";
import {CategoriesTable} from "../components/CategoriesTable"

const Table = () => {
  const { state } = useContext(ExpenseContext);
  const { expenses } = state;

  return (
    <div className="table">
      <SelectCategory/>
      <CategoriesTable/>
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
        <span className="nodata">Pas de dépense à afficher.</span>
      )}
    </div>
  );
};
export default Table;
