import React, { useState } from 'react';

export default function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    description: expense.description,
    amount: expense.amount,
  });

  const categoryColors = {
    Food: "#0a4c34ff",
    Transport: "#095444ff",
    Bills: "#0b503eff",
    Entertainment: "#0a4f46ff",
    Others: "#09502eff",
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(expense.id, editData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className="expense-item"
      style={{ backgroundColor: categoryColors[expense.category] || "#fff" }}
    >
      {isEditing ? (
        <>
          <input
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          />
          <input
            type="number"
            value={editData.amount}
            onChange={(e) => setEditData({ ...editData, amount: e.target.value })}
          />
        </>
      ) : (
        <>
          <h4>{expense.description}</h4>
          <p>₦{expense.amount}</p>
          <p>{expense.category}</p>
          <small>{expense.date}</small>
        </>
      )}
      <div>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
      </div>
    </div>
  );
}
