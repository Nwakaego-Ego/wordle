"use client";
import { useState, useContext, useEffect } from "react";
import Board from "../app/Component/Board/board";
import Keyboard from "../app/Component/Keyboard/keyboard";
import {
  defaultboard as DefaultBoard,
  generateWordSet,
} from "../app/Component/DefaultBoard/DefaultBoard";
import { createContext } from "react";

export const AppContent = createContext();

export default function Home() {
  const [board, setBoard] = useState(DefaultBoard);
  const [position, setPosition] = useState({ attempt: 0, currentPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabaledLetters] = useState([]);

  const correctWord = "RIGHT";

  useEffect(() => {
    const words = generateWordSet();
    setWordSet(words);

    console.log(words);
  }, []);

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

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[position.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setPosition({ attempt: position.attempt + 1, currentPos: 0 });
    } else if (correctWord.toLowerCase() === currWord.toLowerCase()) {
      // Correct word entered
      alert("Game Ended");
      setPosition({ attempt: position.attempt + 1, currentPos: 0 });
    } else {
      alert("Word does not exist");
    }
  };

  //   if (wordSet.has(currWord.toLowerCase())) {
  //     setPosition({ attempt: position.attempt + 1, currentPos: 0 });
  //   } else {
  //     alert("Word does not exist");
  //   }
  // };

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
          disabledLetters,
          setDisabaledLetters,
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
