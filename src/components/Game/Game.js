import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import { GuessHistory } from "./History";
import { GuessInput } from "./Input";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function addNewGuess(guess) {
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      {
        guess,
        id: Date.now(),
      },
    ]);
  }
  return (
    <>
      <GuessHistory guesses={guesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
