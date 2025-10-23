import React, { useState } from "react";
import RGBSlider from "./RGBSlider.jsx";
import ColorDisplay from "./ColorDisplay.jsx";
import "./App.css";

function ColorPicker() {
  const [rgb, setRgb] = useState({ r: 255, g: 100, b: 50 });

  // Convert RGB → HEX
  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
      .toUpperCase();

  const hexColor = rgbToHex(rgb.r, rgb.g, rgb.b);

  // Copy hex to clipboard
  const copyHex = () => {
    navigator.clipboard.writeText(hexColor);
    alert(`Copied ${hexColor} to clipboard!`);
  };

  // Handle slider updates
  const handleChange = (color, value) => {
    setRgb((prev) => ({ ...prev, [color]: Number(value) }));
  };

  return (
    <div className="color-picker">
      <h2> Color Picker</h2>

      <RGBSlider label="Red" value={rgb.r} onChange={(v) => handleChange("r", v)} />
      <RGBSlider label="Green" value={rgb.g} onChange={(v) => handleChange("g", v)} />
      <RGBSlider label="Blue" value={rgb.b} onChange={(v) => handleChange("b", v)} />

      <ColorDisplay rgb={rgb} hex={hexColor} />

      <button onClick={copyHex}>Copy Hex</button>
    </div>
  );
}

export default ColorPicker;
