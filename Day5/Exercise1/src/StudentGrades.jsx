import React, { useState } from 'react';
import './App.css';

export default function StudentGrades() {
  const [filter, setFilter] = useState("All");

  const students = [
    { id: 1, name: "Chidi Okafor", subject: "Math", score: 75 },
    { id: 2, name: "Amaka Johnson", subject: "Math", score: 45 },
    { id: 3, name: "Tunde Adeyemi", subject: "Math", score: 88 },
    { id: 4, name: "Ngozi Eze", subject: "Math", score: 32 },
    { id: 5, name: "Ayo Balogun", subject: "Math", score: 67 },
  ];

  const passedCount = students.filter((s) => s.score >= 50).length;
  const failedCount = students.filter((s) => s.score < 50).length;

  const filteredStudents = students.filter((s) => {
    if (filter === "Passed") return s.score >= 50;
    if (filter === "Failed") return s.score < 50;
    return true;
  });

  return (
    <div className="grade-container">
      <h2> Student Grades</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Passed", "Failed"].map((btn) => (
          <button
            key={btn}
            className={filter === btn ? "active" : ""}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Student List */}
      <ul className="student-list">
        {filteredStudents.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.subject}:{" "}
            <span>{student.score}</span>{" "}
            {student.score >= 50 ? (
              <span className="pass"> PASS</span>
            ) : (
              <span className="fail"> FAIL</span>
            )}
          </li>
        ))}
      </ul>

      {/* Totals */}
      <p className="totals">
        Total Students: {students.length} | Passed: {passedCount} | Failed: {failedCount}
      </p>
    </div>
  );
}
