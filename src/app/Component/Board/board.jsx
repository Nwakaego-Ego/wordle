"use client";
import React from "react";

import Letter from "../Letter/letter";
import "./board.css";

const Board = () => {
  return (
    <>
      <div className="container">
        <span className="item">
          <Letter letterPosition={0} attemptVal={0} />
        </span>
        <span className="item">
          <Letter letterPosition={1} attemptVal={0} />
        </span>
        <span className="item">
          <Letter letterPosition={2} attemptVal={0} />
        </span>
        <span className="item">
          <Letter letterPosition={3} attemptVal={0} />
        </span>
        <span className="item">
          <Letter letterPosition={4} attemptVal={0} />
        </span>
        <span className="item">
          <Letter letterPosition={5} attemptVal={0} />
        </span>

        <span className="item">
          <Letter letterPosition={0} attemptVal={1} />
        </span>
        <span className="item">
          <Letter letterPosition={1} attemptVal={1} />
        </span>
        <span className="item">
          <Letter letterPosition={2} attemptVal={1} />
        </span>
        <span className="item">
          <Letter letterPosition={3} attemptVal={1} />
        </span>
        <span className="item">
          <Letter letterPosition={4} attemptVal={1} />
        </span>
        <span className="item">
          <Letter letterPosition={5} attemptVal={1} />
        </span>

        <span className="item">
          <Letter letterPosition={0} attemptVal={2} />
        </span>
        <span className="item">
          <Letter letterPosition={1} attemptVal={2} />
        </span>
        <span className="item">
          <Letter letterPosition={2} attemptVal={2} />
        </span>
        <span className="item">
          <Letter letterPosition={3} attemptVal={2} />
        </span>
        <span className="item">
          <Letter letterPosition={4} attemptVal={2} />
        </span>
        <span className="item">
          <Letter letterPosition={5} attemptVal={2} />
        </span>

        <span className="item">
          <Letter letterPosition={0} attemptVal={3} />
        </span>
        <span className="item">
          <Letter letterPosition={1} attemptVal={3} />
        </span>
        <span className="item">
          <Letter letterPosition={2} attemptVal={3} />
        </span>
        <span className="item">
          <Letter letterPosition={3} attemptVal={3} />
        </span>
        <span className="item">
          <Letter letterPosition={4} attemptVal={3} />
        </span>
        <span className="item">
          <Letter letterPosition={5} attemptVal={3} />
        </span>

        <span className="item">
          <Letter letterPosition={0} attemptVal={4} />
        </span>
        <span className="item">
          <Letter letterPosition={1} attemptVal={4} />
        </span>
        <span className="item">
          <Letter letterPosition={2} attemptVal={4} />
        </span>
        <span className="item">
          <Letter letterPosition={3} attemptVal={4} />
        </span>
        <span className="item">
          <Letter letterPosition={4} attemptVal={4} />
        </span>
        <span className="item">
          <Letter letterPosition={5} attemptVal={4} />
        </span>
      </div>
    </>
  );
};

export default Board;
