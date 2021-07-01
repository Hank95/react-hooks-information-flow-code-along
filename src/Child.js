import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ color, onChangeColor }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div
      className="child"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    />
  );
}

export default Child;
