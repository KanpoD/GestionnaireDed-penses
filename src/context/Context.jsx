import React, { useReducer } from 'react';
// import ExpenseContext from './ExpenseContext';
// import expenseReducer from '../reducers/expenseReducer';
import Form from '../components/Form';

const ExpenseProvider = ({ children }) => {
  const initialState = {
    expenses: [],
    total: 0
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  return (
    <ExpenseContext.Provider value={{ state, addExpense }}>
      {children}
      <Form /> 
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;