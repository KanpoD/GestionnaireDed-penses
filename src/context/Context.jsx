import React, { createContext, useReducer } from 'react';
import expenseReducer from '../reducer/ExpenseReducer.jsx';

const initialState = {
  expenses: []
};

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};