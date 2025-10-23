import React from "react";
import "./App.css";

function SkillBadge({ skill, level }) {
  const levelColors = {
    Beginner: "gray",
    Intermediate: "#007BFF",
    Expert: "green",
  };

  const badgeStyle = {
    backgroundColor: levelColors[level] || "gray",
  };

  return (
    <span className="skill-badge" style={badgeStyle}>
      {skill} - {level}
    </span>
  );
}

export default SkillBadge;
