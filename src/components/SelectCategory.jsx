import { useState } from "react";
import { categories } from "../data/categories";
const SelectCategory = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <select name={"select"} value={value} onChange={handleChange}>
      <option value="">Sélectionner une catégorie</option>
      {categories.map((categorie) => (
        <option key={categorie} value={categorie}>
          {categorie}
        </option>
      ))}
    </select>
  );
};

export default SelectCategory;
