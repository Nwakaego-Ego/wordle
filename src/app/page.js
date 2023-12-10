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
  return (
    <main className="">
      <AppContent.Provider value={{ board, setBoard, position, setPosition }}>
        <div className="">
          <Board />
          <Keyboard />
        </div>
      </AppContent.Provider>
    </main>
  );
}
