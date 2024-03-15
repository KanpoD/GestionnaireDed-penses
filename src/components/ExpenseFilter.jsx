import React, { useState, useContext } from "react";
import { categories } from "../data/categories";


const ExpenseFilter = (props) => {
  function send(e) {
    setFilterCategory(e);
    props.filter(e)
}
  const [filterCategory, setFilterCategory] = useState("");

    return(
        <div>
            filtrer par catégorie:
        <select value={filterCategory} onChange={(e) => send(e.target.value)}>
          <option value="">Sélectionner une catégorie</option>
          {categories.map((categrorie) => (
            <option key={categrorie} value={categrorie}>
              {categrorie}
            </option>
          ))}
        </select>
        </div>
    )
}

export default ExpenseFilter;