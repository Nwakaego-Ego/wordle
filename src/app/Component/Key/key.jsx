import React, { useContext } from "react";
import { AppContent } from "../../page";
import "./key.css";

const Key = ({ keyVal, bigKey }) => {
  const { board, setBoard, position, setPosition } = useContext(AppContent);

  const selectLetter = () => {
    if (keyVal === "Enter" || keyVal === "Return") {
      if (position.currentPos !== 5) {
        return;
      }
      setPosition({ attempt: position.attempt + 1, currentPos: 0 });
    } else {
      if (position.currentPos > 4) return;
      const newBoard = [...board];
      newBoard[position.attempt][position.currentPos] = keyVal;
      setBoard(newBoard);
      setPosition({ ...position, currentPos: position.currentPos + 1 });
    }
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
