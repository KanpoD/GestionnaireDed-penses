const Table = () => {
  const expenses = [
    { id: 1, title: "item 1", value: "10" },
    { id: 2, title: "item 2", value: "15" },
    { id: 3, title: "item 3", value: "20" },
  ];

  return (
    <>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => {
            // return <Item key={expense.id} amount={expense.amount} category={expense.category} description={exepense.description}/>
            return (
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <p>
                  {expense.title} - {expense.value}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <span>Aucun post à afficher pour le moment.</span>
      )}
    </>
  );
};
export default Table;
