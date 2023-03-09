import { useState } from "react";

export const GuessInput = () => {
  const [guess, setGuess] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern="[A-Z]{5}"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
};
