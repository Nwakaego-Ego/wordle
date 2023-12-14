import React, { useContext } from "react";
import { AppContent } from "../../page";
import "./letter.css";

const Letter = ({ attemptVal, letterPosition }) => {
  const { board, correctWord, position } = useContext(AppContent);

  // Check if board and board[attemptVal] are defined
  if (!board || !board[attemptVal]) {
    return null; // Or handle the case where data is not available
  }

  const letter = board[attemptVal][letterPosition];

  const correct = correctWord[letterPosition] === letter;

  const almost = !correct && correctWord.includes(letter);

  // this is a variable
  let letterState = "";
  if (position.attempt > attemptVal) {
    letterState = correct ? "correct" : almost ? "almost" : "error";
  }

  // embedding it inside the class name
  return <div className={`letter ${letterState}`}>{letter}</div>;
};

export default Letter;
