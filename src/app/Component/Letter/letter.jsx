"use client";

// import React, { useContext } from "react";
// import "./letter.css";
// import { AlphaContent } from "../../page";

// const Letter = ({ attemptVal, letterPosition }) => {
//   const { board } = useContext(AlphaContent);
//   const letter = board[attemptVal][letterPosition];
//   return (
//     <>
//       <div className="letter-row">{letter}</div>
//     </>
//   );
// };
// export default Letter;

import React, { useContext } from "react";
import { AlphaContent } from "../../page"; // Adjust the import path based on your project structure
import "./letter.css";

const Letter = ({ attemptVal, letterPosition }) => {
  const { board } = useContext(AlphaContent);

  // Check if board and board[attemptVal] are defined
  if (!board || !board[attemptVal]) {
    return null; // Or handle the case where data is not available
  }

  const letter = board[attemptVal][letterPosition];

  return <div className="letter-row">{letter}</div>;
};

export default Letter;
