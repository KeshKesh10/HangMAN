function ResultModal({ isOpen, status, word, onNewGame }) {
  if (!isOpen) return null;

  const title = status === 'won' ? 'You won!' : 'You lost!';
  const message =
    status === 'won'
      ? 'Great job guessing the word.'
      : `The word was ${word}.`;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onNewGame} className="new-game-button">
          Start New Game
        </button>
      </div>
    </div>
  );
}

export default ResultModal;
