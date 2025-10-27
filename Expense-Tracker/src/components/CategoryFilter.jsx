

export default function CategoryFilter({ onFilterChange, currentFilter }) {
  const categories = ["All", "Food", "Transport", "Bills", "Entertainment", "Others"];

  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilterChange(cat)}
          className={currentFilter === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
