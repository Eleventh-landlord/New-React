import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput.jsx";
import FahrenheitInput from "./FahrenheitInput.jsx";
import "./App.css";

function TemperatureApp() {
  const [temperature, setTemperature] = useState({ scale: "c", value: 0 });

  // Convert between scales
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  // Handle Celsius input
  const handleCelsiusChange = (value) => {
    setTemperature({ scale: "c", value });
  };

  // Handle Fahrenheit input
  const handleFahrenheitChange = (value) => {
    setTemperature({ scale: "f", value });
  };

  // Determine synchronized values
  const celsius =
    temperature.scale === "f"
      ? toCelsius(Number(temperature.value)).toFixed(2)
      : temperature.value;

  const fahrenheit =
    temperature.scale === "c"
      ? toFahrenheit(Number(temperature.value)).toFixed(2)
      : temperature.value;

  return (
    <div className="temp-container">
      <h2>Temperature Converter</h2>

      <CelsiusInput value={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput
        value={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />

      <p className="info">
        {celsius}°C = {fahrenheit}°F
      </p>
    </div>
  );
}

export default TemperatureApp;
