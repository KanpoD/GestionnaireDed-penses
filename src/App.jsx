import "./App.css";
import Form from "./components/Form";
import { useState } from 'react'
import Table from './components/Table'
import './App.css'

  const App = () => {
    return (
      <div className="App">
        <Form />
        <Table/>
      </div>
    );
  };

export default App;
