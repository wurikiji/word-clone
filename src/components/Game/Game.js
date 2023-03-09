import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function addNewGuess(guess) {
    const newResult = checkGuess(guess, answer);
    const newGuesses = [...guesses, { result: newResult, id: Date.now() }];
    setGuesses(newGuesses);
    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
    if (newResult.every((r) => r.status === "correct")) {
      setGameStatus("win");
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        addNewGuess={addNewGuess}
        isPlaying={gameStatus === "playing"}
      >
        {gameStatus === "win" && (
          <div class="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{guesses.length} guesses</strong>.
            </p>
          </div>
        )}
        {gameStatus === "lose" && (
          <div class="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        )}
      </GuessInput>
    </>
  );
}

export default Game;
