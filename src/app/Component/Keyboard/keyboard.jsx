import React, { useCallback, useEffect, useContext } from "react";
import { AppContent } from "../../page";
import Key from "../Key/key";
import "./keyboard.css";

const Keyboard = () => {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContent);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleClick = (event) => {
    if (event.key === "Enter" || event.key === "Return") {
      onEnter();
      console.log("Enter");
    } else if (event.key === "backspace" || event.key === "Delete") {
      onDelete();
      console.log("Delete");
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
          console.log("Selected key from keys1:", key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
          console.log("Selected key from keys2:", key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
          console.log("Selected key from keys3:", key);
        }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClick);

    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  }, []);

  return (
    <div className="keyboard">
      <div className="keyboard-main  ">
        <div className="line1 flex flex-row keyboard-container">
          {keys1.map((key) => {
            return <Key keyVal={key} />;
          })}
        </div>
        <div className="line2 flex flex-row keyboard-container">
          {keys2.map((key) => {
            return <Key keyVal={key} />;
          })}
        </div>
        <div className="line3 flex flex-row keyboard-container">
          <Key keyVal="Enter" bigKey />
          {keys3.map((key) => {
            return <Key keyVal={key} />;
          })}
          <Key keyVal="Delete" bigKey />
        </div>
      </div>
    </div>
  );
};
export default Keyboard;
