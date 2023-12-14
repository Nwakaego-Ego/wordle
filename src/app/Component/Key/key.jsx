import React, { useContext } from "react";
import { AppContent } from "../../page";
import "./key.css";

const Key = ({ keyVal, bigKey, disabled }) => {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContent);

  const selectLetter = () => {
    console.log("letter position  ", keyVal);
    if (keyVal === "Enter" || keyVal === "Return") {
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <>
      <div className="key ">
        <div
          className="keyVal"
          id={bigKey ? "big" : disabled && "disabled"}
          onClick={selectLetter}
        >
          {keyVal}
        </div>
      </div>
    </>
  );
};

export default Key;
