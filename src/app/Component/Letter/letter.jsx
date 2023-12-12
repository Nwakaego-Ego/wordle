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

  // Check if the current letter is correct
  const correct = correctWord[letterPosition] === letter;

  // Check if the current letter is almost correct
  const almost = !correct && correctWord.includes(letter);

  // Determine the letter state based on conditions
  let letterState = "";
  if (position.attempt > attemptVal) {
    letterState = correct ? "correct" : almost ? "almost" : "error";
  }

  return <div className={`letter-row text-white ${letterState}`}>{letter}</div>;

  // return <div className="letter-row text-white ">{letter}</div>;
};

export default Letter;
