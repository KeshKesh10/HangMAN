function StartScreen({ onStart }) {
  return (
    <section className="screen-card" aria-label="Start screen">
      <h1>Hangman Game</h1>
      <p>Guess the word before you run out of 5 lives.</p>
      <button className="new-game-button" onClick={onStart}>
        Start Game
      </button>
    </section>
  )
}

export default StartScreen
