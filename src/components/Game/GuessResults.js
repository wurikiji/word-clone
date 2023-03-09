import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
export const GuessResults = ({ guesses, answer }) => {
  const maxGuesses = NUM_OF_GUESSES_ALLOWED;
  return (
    <div className="guess-results">
      {range(maxGuesses).map((guessIndex) => {
        const guess = guesses[guessIndex];
        return guess === undefined ? (
          <EmptyGuess key={`empty-guess-${guessIndex}`} />
        ) : (
          <Guess key={guess.id} guess={checkGuess(guess.guess ?? "", answer)} />
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

const Guess = ({ guess }) => {
  return (
    <p className="guess">
      {guess?.map((result, index) => {
        return (
          <span key={index} className={`cell ${result.status}`}>
            {result.letter}
          </span>
        );
      })}
    </p>
  );
};
