"use client";
import React from "react";
// import DefaultBoard from "../DefaultBoard/DefaultBoard";
import Letter from "../Letter/letter";
import "./board.css";

const Board = () => {
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
              attemptVal={row}
              letterPosition={column}
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
