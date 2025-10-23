import React from "react";

function CelsiusInput({ value, onTemperatureChange }) {
  return (
    <div className="input-group">
      <label>Celsius:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

export default CelsiusInput;
