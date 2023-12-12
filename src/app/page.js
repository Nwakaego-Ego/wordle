"use client";
import { useState, useContext } from "react";
import Board from "../app/Component/Board/board";
import Keyboard from "../app/Component/Keyboard/keyboard";
import { defaultboard as DefaultBoard } from "../app/Component/DefaultBoard/DefaultBoard";
import { createContext } from "react";

export const AppContent = createContext();

export default function Home() {
  const [board, setBoard] = useState(DefaultBoard);
  const [position, setPosition] = useState({ attempt: 0, currentPos: 0 });

  const correctWord = "RIGHT";

  const onSelectLetter = (keyVal) => {
    if (position.currentPos > 4) return;
    const newBoard = [...board];
    newBoard[position.attempt][position.currentPos] = keyVal;
    setBoard(newBoard);
    setPosition({ ...position, currentPos: position.currentPos + 1 });
  };

  const onDelete = () => {
    const newBoard = [...board];
    newBoard[position.attempt][position.currentPos - 1] = " ";
    setBoard(newBoard);
    setPosition({ ...position, currentPos: position.currentPos - 1 });
  };

  const onEnter = () => {
    if (position.currentPos !== 5) {
      return;
    }
    setPosition({ attempt: position.attempt + 1, currentPos: 0 });
  };

  return (
    <main className="">
      <AppContent.Provider
        value={{
          board,
          setBoard,
          position,
          setPosition,
          onDelete,
          onEnter,
          onSelectLetter,
          correctWord,
        }}
      >
        <div className="">
          <Board />
          <Keyboard />
        </div>
      </AppContent.Provider>
    </main>
  );
}
