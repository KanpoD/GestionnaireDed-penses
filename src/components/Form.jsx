import React, { useState } from "react";

const Form = () => {

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (amount.trim() && category.trim()) {
      const expense = {
        amount: parseFloat(amount),
        category: category.trim(),
        description: ''
      };

      console.log(expense);

      setAmount("");
      setCategory("");
      setDescription("");
    } else {
      console.log("tous les champs doivent etre saisie");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Montant:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Catégorie:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Sélectionner une catégorie</option>
          <option value="Alimentation">Alimentation</option>
          <option value="Logement">Logement</option>
          <option value="Transport">Transport</option>
          <option value="Divertissement">Divertissement</option>
          <option value="Santé">Santé</option>
          <option value="Éducation">Éducation</option>
          <option value="Autres">Autres</option>
        </select>
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Ajouter dépense</button>
    </form>
  );
};

export default Form;
