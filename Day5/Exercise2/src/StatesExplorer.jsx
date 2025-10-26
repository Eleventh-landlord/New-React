import React, { useState } from 'react';
import './App.css';

export default function StatesExplorer() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

  const states = [
    { id: 1, name: "Lagos", capital: "Ikeja", region: "South West" },
    { id: 2, name: "Oyo", capital: "Ibadan", region: "South West" },
    { id: 3, name: "Kano", capital: "Kano", region: "North West" },
    { id: 4, name: "Kaduna", capital: "Kaduna", region: "North West" },
    { id: 5, name: "Rivers", capital: "Port Harcourt", region: "South South" },
    { id: 6, name: "Enugu", capital: "Enugu", region: "South East" },
    { id: 7, name: "Plateau", capital: "Jos", region: "North Central" },
    { id: 8, name: "Anambra", capital: "Awka", region: "South East" },
    { id: 9, name: "Borno", capital: "Maiduguri", region: "North East" },
    { id: 10, name: "Edo", capital: "Benin City", region: "South South" },
  ];

  // Filter Logic
  const filteredStates = states.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.capital.toLowerCase().includes(search.toLowerCase());
    const matchesRegion =
      regionFilter === "All" || s.region.includes(regionFilter);
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="states-container">
      <h2>Nigerian States</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by state or capital..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Region Filter Buttons */}
      <div className="filter-buttons">
        {["All", "North", "South", "East", "West"].map((region) => (
          <button
            key={region}
            className={regionFilter === region ? "active" : ""}
            onClick={() => setRegionFilter(region)}
          >
            {region}
          </button>
        ))}
      </div>

      {/* State List */}
      <ul className="state-list">
        {filteredStates.length > 0 ? (
          filteredStates.map((state) => (
            <li key={state.id}>
              <strong>{state.name}</strong> - Capital: {state.capital}{" "}
              <span className="region">({state.region})</span>
            </li>
          ))
        ) : (
          <p className="no-results">No results found </p>
        )}
      </ul>

      {/* Count */}
      <p className="count">
        Showing {filteredStates.length} of {states.length} states
      </p>
    </div>
  );
}
