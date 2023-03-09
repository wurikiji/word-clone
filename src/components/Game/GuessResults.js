import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
export const GuessResults = ({ guesses }) => {
  const maxGuesses = NUM_OF_GUESSES_ALLOWED;
  return (
    <div className="guess-results">
      {range(maxGuesses).map((guessIndex) => {
        const guess = guesses[guessIndex];
        return (
          <Guess
            key={guess?.id ?? `empty-guess-${guessIndex}`}
            guess={guess?.guess ?? ""}
          />
        );
      })}
    </div>
  );
};

const Guess = ({ guess }) => {
  return (
    <p className="guess">
      {range(5).map((charIndex) => {
        const char = guess[charIndex] ?? "";
        return (
          <span key={charIndex} className={"cell"}>
            {char}
          </span>
        );
      })}
    </p>
  );
};
