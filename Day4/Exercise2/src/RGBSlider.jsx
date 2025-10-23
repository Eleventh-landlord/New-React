import React from "react";

function RGBSlider({ label, value, onChange }) {
  const colors = {
    Red: "#ff4d4d",
    Green: "#4caf50",
    Blue: "#2196f3",
  };

  return (
    <div className="slider-group">
      <label>
        {label}: <span>{value}</span>
      </label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ accentColor: colors[label] }}
      />
    </div>
  );
}

export default RGBSlider;
