"use client";
import { useState, createContext } from "react";
import Board from "../app/Component/Board/board";
import Keybaord from "../app/Component/Keyboard/keyboard";
import defaultBoard from "../app/Component/DefaultBoard/DefaultBoard";

export const AlphaContent = createContext();

export default function Home() {
  const [board, setBoard] = useState(defaultBoard);
  return (
    <main className="">
      <AlphaContent.Provider value={{ board, setBoard }}>
        <Board />
        <Keybaord />
      </AlphaContent.Provider>
    </main>
  );
}
