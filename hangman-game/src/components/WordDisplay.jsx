import LetterBox from './letterbox';

function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display">
      {word.split('').map((letter, index) => (
        <LetterBox
          key={`${letter}-${index}`}
          letter={letter}
          isVisible={guessedLetters.includes(letter)}
          boxStyle={{ margin: '0 6px', width: '48px', height: '48px' }}
        />
      ))}
    </div>
  );
}

export default WordDisplay;
