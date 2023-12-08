"use client";

import React, { useContext } from "react";
import { AppContent } from "../../page";
import "./letter.css";

const Letter = ({ attemptVal, letterPosition }) => {
  const { board } = useContext(AppContent);

  //   // Check if board and board[attemptVal] are defined
  if (!board || !board[attemptVal]) {
    return null; // Or handle the case where data is not available
  }

  const letter = board[attemptVal][letterPosition];
  console.log("Letter here", letter);
  //   console.log("Board from context:", board);
  console.log("attemptVal:", attemptVal);
  console.log("letterPosition:", letterPosition);

  return <div className="letter-row text-white">{letter}</div>;
};

export default Letter;
