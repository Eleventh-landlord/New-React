import React from "react";

function FahrenheitInput({ value, onTemperatureChange }) {
  return (
    <div className="input-group">
      <label>Fahrenheit:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

export default FahrenheitInput;
