import React, { useCallback, useEffect, useContext } from "react";
import { AppContent } from "../../page";
import Key from "../Key/key";
import "./keyboard.css";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onSelectLetter, onEnter, onDelete, disabledLetters, disabled } =
    useContext(AppContent);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter" || event.key === "Return") {
      onEnter();
      console.log("Enter");
    } else if (event.key === "Backspace" || event.key === "Delete") {
      onDelete();
      console.log("Delete");
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
          console.log("first");
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
          console.log("second");
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
          console.log("third");
        }
      });
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="keyboard-main  ">
        <div className="line1 flex flex-row keyboard-container">
          {keys1.map((key) => {
            return (
              <Key keyVal={key} disabled={disabledLetters.includes(key)} />
            );
          })}
        </div>
        <div className="line2 flex flex-row keyboard-container">
          {keys2.map((key) => {
            return (
              <Key keyVal={key} disabled={disabledLetters.includes(key)} />
            );
          })}
        </div>
        <div className="line3 flex flex-row keyboard-container">
          <Key keyVal="Enter" bigKey />
          {keys3.map((key) => {
            return (
              <Key keyVal={key} disabled={disabledLetters.includes(key)} />
            );
          })}
          <Key keyVal="Delete" bigKey />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
