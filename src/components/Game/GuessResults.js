import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
export const GuessResults = ({ guesses }) => {
  const maxGuesses = NUM_OF_GUESSES_ALLOWED;
  return (
    <div className="guess-results">
      {range(maxGuesses).map((guessIndex) => {
        const guess = guesses[guessIndex];
        return guess === undefined ? (
          <EmptyGuess key={`empty-guess-${guessIndex}`} />
        ) : (
          <Guess key={guess.id} result={guess.result} />
        );
      })}
    </div>
  );
};

const EmptyGuess = () => {
  return (
    <p className="guess">
      {range(5).map((index) => {
        return <span key={index} className="cell" />;
      })}
    </p>
  );
};

const Guess = ({ result }) => {
  return (
    <p className="guess">
      {result.map((r, index) => {
        return (
          <span key={index} className={`cell ${r.status}`}>
            {r.letter}
          </span>
        );
      })}
    </p>
  );
};
