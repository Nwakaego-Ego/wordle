import React, { useContext } from "react";
import { AppContent } from "../../page";
import "./key.css";

const Key = ({ keyVal, bigKey }) => {
  const { board, setBoard, position, setPosition } = useContext(AppContent);
  const selectLetter = () => {
    const newBoard = [...board];
    newBoard[position.attempt][position.currPos] = keyVal;
    setBoard(newBoard);
    setPosition(...position, currPos + 1);
  };
  return (
    <>
      <div className="key ">
        <div className="keyVal" id={bigKey && "big"} onClick={selectLetter}>
          {keyVal}
        </div>
      </div>
    </>
  );
};

export default Key;
