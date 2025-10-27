import React, { useState } from 'react';
import Header from './components/Header.jsx';
import AddExpenseForm from './components/AddExpenseForm.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ExpenseStats from './components/ExpenseStats.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import './App.css';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const editExpense = (id, updatedData) => {
    setExpenses(
      expenses.map((exp) => (exp.id === id ? { ...exp, ...updatedData } : exp))
    );
  };

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === filter);

  return (
    <div className="tracker-container">
      <Header />
      <AddExpenseForm onAddExpense={addExpense} />
      <CategoryFilter onFilterChange={setFilter} currentFilter={filter} />
      <ExpenseStats expenses={filteredExpenses} />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
    </div>
  );
}
