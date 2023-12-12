"use client";

import React, { useContext } from "react";
import { AppContent } from "../../page";
import Letter from "../Letter/letter";
import "./board.css";

const Board = ({ attemptVal, letterPosition }) => {
  const { board, correctWord, position } = useContext(AppContent);

  const calculateLetterState = (attemptVal, letterPosition) => {
    if (!board || !board[attemptVal]) {
      return "error"; // or some default state if data is not available
    }

    const letter = board[attemptVal][letterPosition];
    const correct = correctWord[letterPosition] === letter;
    const almost = !correct && correctWord.includes(letter);

    return position.attempt > attemptVal
      ? correct
        ? "correct"
        : almost
        ? "almost"
        : "error"
      : "";
  };

  return (
    <div className="container-main">
      <div className="container-board">
        <span className="item ">
          <Letter
            letterPosition={0}
            attemptVal={0}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={1}
            attemptVal={0}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={2}
            attemptVal={0}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={3}
            attemptVal={0}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={4}
            attemptVal={0}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>

        <span className="item ">
          <Letter
            letterPosition={0}
            attemptVal={1}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={1}
            attemptVal={1}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={2}
            attemptVal={1}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={3}
            attemptVal={1}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={4}
            attemptVal={1}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>

        <span className="item ">
          <Letter
            letterPosition={0}
            attemptVal={2}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={1}
            attemptVal={2}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={2}
            attemptVal={2}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={3}
            attemptVal={2}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={4}
            attemptVal={2}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>

        <span className="item ">
          <Letter
            letterPosition={0}
            attemptVal={3}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={1}
            attemptVal={3}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={2}
            attemptVal={3}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item">
          <Letter
            letterPosition={3}
            attemptVal={3}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={4}
            attemptVal={3}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>

        <span className="item ">
          <Letter
            letterPosition={0}
            attemptVal={4}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item">
          <Letter
            letterPosition={1}
            attemptVal={4}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={2}
            attemptVal={4}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={3}
            attemptVal={4}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={4}
            attemptVal={4}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>

        <span className="item ">
          <Letter
            letterPosition={0}
            attemptVal={5}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={1}
            attemptVal={5}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={2}
            attemptVal={5}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={3}
            attemptVal={5}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
        <span className="item ">
          <Letter
            letterPosition={4}
            attemptVal={5}
            letterState={calculateLetterState(attemptVal, letterPosition)}
          />
        </span>
      </div>
    </div>
  );
};

export default Board;
