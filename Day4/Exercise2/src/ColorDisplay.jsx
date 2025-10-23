import React from "react";

function ColorDisplay({ rgb, hex }) {
  const { r, g, b } = rgb;
  const previewColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="color-display">
      <div className="preview" style={{ backgroundColor: previewColor }}></div>
      <p>RGB: ({r}, {g}, {b})</p>
      <p>HEX: {hex}</p>
    </div>
  );
}

export default ColorDisplay;
