import React from "react";
import Key from "../Key/key";

const Keyboard = () => {
  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <>
      <div className="mt-60">
        <div className="line1 flex flex-row">
          {key1.map((key) => {
            return <Key keyVal={key} />;
          })}
        </div>
        <div className="line2 flex flex-row">
          {key2.map((key) => {
            return <Key keyVal={key} />;
          })}
        </div>
        <div className="line3 flex flex-row">
          {key3.map((key) => {
            return <Key keyVal={key} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Keyboard;
