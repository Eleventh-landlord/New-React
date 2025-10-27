
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses yet. Add one!</p>
      ) : (
        expenses.map((exp) => (
          <ExpenseItem
            key={exp.id}
            expense={exp}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}
