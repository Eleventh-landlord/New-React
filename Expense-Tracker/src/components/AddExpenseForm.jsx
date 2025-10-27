import React, { useState } from 'react';

export default function AddExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({ description: "", amount: "", category: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || form.amount <= 0 || !form.category) return;
    onAddExpense(form);
    setForm({ description: "", amount: "", category: "" });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        name="description"
        placeholder="Expense description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount ₦"
        value={form.amount}
        onChange={handleChange}
      />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Others</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}
