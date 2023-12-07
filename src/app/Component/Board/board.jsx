"use client";
import React, { useState } from "react";
// import DefaultBoard from "../DefaultBoard/DefaultBoard";
import Letter from "../Letter/letter";
import "./board.css";

const Board = () => {
  //   const [defaultboard, setDefaultBoard] = useState(DefaultBoard);

  const numRows = 6;
  const numColumns = 6;

  const generateGrid = () => {
    const gridItems = [];

    for (let row = 0; row < numRows; row++) {
      for (let column = 0; column < numColumns; column++) {
        gridItems.push(
          <span key={`${numRows} ${numColumns}`} className="item">
            <Letter
              //   eachrows={row}
              //   sixrows={column}
              attemptVal={0}
              letterPosition={0}
            />
          </span>
        );
      }
    }

    return gridItems;
  };

  return (
    <>
      <div className="container">{generateGrid()}</div>
    </>
  );
};

export default Board;
