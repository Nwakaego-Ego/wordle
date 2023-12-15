"use client";
import { useState, useContext, useEffect } from "react";
import Board from "../app/Component/Board/board";
import Keyboard from "../app/Component/Keyboard/keyboard";
import {
  defaultboard as DefaultBoard,
  generateWordSet,
} from "../app/Component/DefaultBoard/DefaultBoard";
import { createContext } from "react";
import GameOver from "./Component/GameOver/gameOver";

export const AppContent = createContext();

export default function Home() {
  const [board, setBoard] = useState(DefaultBoard);
  const [position, setPosition] = useState({ attempt: 0, currentPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  // const [correctWord, setCorrectWord] = useState("");

  const correctWord = "RIGHT";

  // useEffect(() => {
  //   const words = generateWordSet();
  //   const actual = actualWords;
  //   setWordSet(words);
  //   setCorrectWord(actual);

  //   console.log(words);
  // }, []);

  useEffect(() => {
    const { wordSet: words, actualWords } = generateWordSet(); // Destructure the returned object
    setWordSet(words);
    // setCorrectWord(actualWords);

    console.log(correctWord);
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

    console.log("Entered Word:", currWord);
    console.log("Correct Word:", correctWord);

    if (wordSet.has(currWord.toLowerCase())) {
      setPosition({ attempt: position.attempt + 1, currentPos: 0 });
    } else if (correctWord.toLowerCase() === currWord.toLowerCase()) {
      // Correct word entered
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    } else {
      alert("Word does not exist");
    }

    // Check if the game is over
    if (position.attempt >= 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  // const onEnter = () => {
  //   if (position.currentPos !== 5) {
  //     return;
  //   }

  //   let currWord = "";
  //   for (let i = 0; i < 5; i++) {
  //     currWord += board[position.attempt][i];
  //   }

  //   if (wordSet.has(currWord.toLowerCase())) {
  //     setPosition({ attempt: position.attempt + 1, currentPos: 0 });
  //   } else if (correctWord.toLowerCase() === currWord.toLowerCase()) {
  //     // Correct word entered
  //     setGameOver({ gameOver: true, guessedWord: true });
  //     setPosition({ attempt: position.attempt + 1, currentPos: 0 });
  //     return;
  //   } else {
  //     alert("Word does not exist");
  //   }

  //   // Check if the game is over
  //   if (position.attempt >= 5) {
  //     setGameOver({ gameOver: true, guessedWord: false });
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
          setDisabledLetters,
          setGameOver,
          gameOver,
        }}
      >
        <div className="">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContent.Provider>
    </main>
  );
}
