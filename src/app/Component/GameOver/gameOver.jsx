import React, { useContext } from "react";
import { AppContent } from "../../page";
import "./gameOver.css";

function GameOver() {
  const { gameOver, position, correctWord } = useContext(AppContent);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {position.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
