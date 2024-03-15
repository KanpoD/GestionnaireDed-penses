import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Table from "./components/Table";
import "./App.css";
import { ExpenseProvider } from "./context/Context";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="App">
        <h1>Dépenses</h1>
        <Table />
        <Form />
      </div>
    </ExpenseProvider>
  );
};
export default App;
