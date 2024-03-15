import "./App.css";
import Form from "./components/Form";
import { useState } from 'react'
import Table from './components/Table'
import './App.css'
import { ExpenseProvider } from './context/Context';

const App = () => {
  return (
    <ExpenseProvider>
      <div className="App">
        <Form />
        <Table/>
      </div>
    </ExpenseProvider>
  );
};
export default App;
