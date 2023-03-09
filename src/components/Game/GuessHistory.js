export const GuessHistory = ({ guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map((g) => (
        <p className="guess" key={g.id}>
          {g.guess}
        </p>
      ))}
    </div>
  );
};
