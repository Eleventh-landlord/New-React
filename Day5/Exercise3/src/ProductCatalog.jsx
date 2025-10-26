import React, { useState } from 'react';
import './App.css';

export default function ProductCatalog() {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const products = [
    { id: 1, name: "Laptop", price: 450000, inStock: true, category: "Electronics" },
    { id: 2, name: "Phone", price: 150000, inStock: false, category: "Electronics" },
    { id: 3, name: "T-shirt", price: 8000, inStock: true, category: "Clothing" },
    { id: 4, name: "Jeans", price: 18000, inStock: false, category: "Clothing" },
    { id: 5, name: "Jollof Rice", price: 1500, inStock: true, category: "Food" },
    { id: 6, name: "Bread", price: 800, inStock: true, category: "Food" },
  ];

  // Filter by category
  const filteredProducts = products.filter(
    (p) => category === "All" || p.category === category
  );

  // Sort by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="catalog-container">
      <h2> Product Catalog</h2>

      {/* Category Filter */}
      <div className="filter-buttons">
        {["All", "Electronics", "Clothing", "Food"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sorting */}
      <div className="sort-section">
        <label>Sort by price:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">None</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>

      {/* Product List */}
      <ul className="product-list">
        {sortedProducts.map((product) => (
          <li
            key={product.id}
            className={product.inStock ? "in-stock" : "out-of-stock"}
          >
            <h3>{product.name}</h3>
            <p>₦{product.price.toLocaleString()}</p>
            {product.inStock ? (
              <button className="add-btn">Add to Cart</button>
            ) : (
              <span className="out-label">OUT OF STOCK</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
