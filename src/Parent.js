import React, { Children, useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childernColor, setChildrenColor] = useState(randomColor);

  function handleChangeColor(newChildColor) {
    const randomColor = getRandomColor();
    setColor(randomColor);
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childernColor} onChangeColor={handleChangeColor} />
      <Child color={childernColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
