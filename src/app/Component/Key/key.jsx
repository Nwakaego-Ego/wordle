import React, { useContext } from "react";
import { AppContent } from "../../page";
import "./key.css";

const Key = ({ keyVal, bigKey }) => {
  const { board, setBoard, position, setPosition } = useContext(AppContent);
  const selectLetter = () => {
    const newBoard = [...board];
    console.log(newBoard);
    newBoard[position.attempt][position.currentPos] = keyVal;
    // console.log(newBoard);
    // console.log(position.attempt);
    // console.log(position.currPos);
    setBoard(newBoard);
    console.log(newBoard);
    setPosition({ ...position, currentPos: position.currentPos + 1 });
    console.log(position);
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
