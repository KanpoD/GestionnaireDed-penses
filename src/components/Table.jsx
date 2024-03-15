import React, {useState, useContext } from "react";
import { ExpenseContext } from "../context/Context";
import Item from "./Item";
import ExpenseFilter from './ExpenseFilter'

const Table = () => {
    const filterCategory = (dataFromChild) => {setParentData(dataFromChild)}
  const { state } = useContext(ExpenseContext);
  const { expenses } = state;
  const [parentData, setParentData] = useState("");
  return (
    <>
        <ExpenseFilter filter={filterCategory}/>
        {expenses.length > 0 ? (
        <ul className="list">
          {expenses.map((expense) => {
                console.log(parentData)
                if(parentData !== "" && parentData != expense.category ){
                    return
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
        <span>Pas de dépense à afficher.</span>
      )}
    </>
  );
};
export default Table;