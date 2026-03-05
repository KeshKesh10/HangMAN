function EndScreen({ status, word, onPlayAgain }) {
  const isWinner = status === 'won'

  return (
    <section className="screen-card" aria-label="Result screen">
      <h1>{isWinner ? 'Winner!' : 'Loser!'}</h1>
      <p>
        {isWinner
          ? 'Great job. You guessed the word.'
          : `The word was ${word}. Better luck next time.`}
      </p>
      <button className="new-game-button" onClick={onPlayAgain}>
        Play Again
      </button>
    </section>
  )
}

export default EndScreen
