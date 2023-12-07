"use client";
import React, { useState } from "react";
// import DefaultBoard from "../DefaultBoard/DefaultBoard";
import Letter from "../Letter/letter";
import "./board.css";

const Board = () => {
  //   const [defaultboard, setDefaultBoard] = useState(DefaultBoard);

  const grid = () => {};

  return (
    <>
      <div className="container">
        <span className="item">
          <Letter eachrows={0} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={1} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={2} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={3} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={4} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={5} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={0} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={1} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={2} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={3} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={4} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={5} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={0} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={1} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={2} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={3} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={4} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={5} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={0} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={1} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={2} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={3} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={4} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={5} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={0} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={1} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={2} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={3} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={4} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={5} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={0} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={1} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={2} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={3} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={4} sixrows={0} />
        </span>
        <span className="item">
          <Letter eachrows={5} sixrows={0} />
        </span>
      </div>
    </>
  );
};

export default Board;
