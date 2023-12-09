import React from "react";
import Key from "../Key/key";
import "./keyboard.css";

const Keyboard = () => {
  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="keyboard-main  ">
        <div className="line1 flex flex-row keyboard-container">
          {key1.map((key) => {
            return <Key keyVal={key} />;
          })}
        </div>
        <div className="line2 flex flex-row keyboard-container">
          {key2.map((key) => {
            return <Key keyVal={key} />;
          })}
        </div>
        <div className="line3 flex flex-row keyboard-container">
          <Key keyVal="Enter" bigKey />
          {key3.map((key) => {
            return <Key keyVal={key} />;
          })}
          <Key keyVal="Delete" bigKey />
        </div>
      </div>
    </div>
  );
};
export default Keyboard;
