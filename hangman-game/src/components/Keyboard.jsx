const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Keyboard({ guessedLetters, onGuess, disabled }) {
  return (
    <div className="keyboard" aria-label="Letter keyboard">
      {ALPHABET.map((letter) => {
        const isUsed = guessedLetters.includes(letter);

        return (
          <button
            key={letter}
            className="letter-button"
            onClick={() => onGuess(letter)}
            disabled={disabled || isUsed}
            aria-label={`Guess ${letter}`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
