import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/Context";
import { categories } from "../data/categories";

const Form = () => {
  const { dispatch } = useContext(ExpenseContext);

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (amount.trim() && category.trim()) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: {
          id: Date(),
          amount: parseFloat(amount),
          category: category.trim(),
          description: description.trim(),
        },
      });

      setAmount("");
      setCategory("");
      setDescription("");
    } else {
      alert("Tous les champs doivent être saisis.");
    }
  };

  return (
    <div className="form_container">
        
      <form onSubmit={handleSubmit}>
        <label>
          <p>Montant:</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          <p>Catégorie:</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Sélectionner une catégorie</option>
            {categories.map((categrorie) => (
              <option key={categrorie} value={categrorie}>
                {categrorie}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Description:</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Ajouter dépense</button>
      </form>
    </div>
  );
};

export default Form;
