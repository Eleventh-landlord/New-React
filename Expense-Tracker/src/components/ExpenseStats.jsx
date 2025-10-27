

export default function ExpenseStats({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const highest = expenses.reduce(
    (max, e) => (Number(e.amount) > max ? Number(e.amount) : max),
    0
  );

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  return (
    <div className="stats">
      <h3> Statistics</h3>
      <p>Total Spent: ₦{total}</p>
      <p>Number of Expenses: {expenses.length}</p>
      <p>Highest Expense: ₦{highest}</p>
      <div className="category-breakdown">
        {Object.entries(categoryTotals).map(([cat, amt]) => (
          <p key={cat}>
            {cat}: ₦{amt}
          </p>
        ))}
      </div>
    </div>
  );
}
