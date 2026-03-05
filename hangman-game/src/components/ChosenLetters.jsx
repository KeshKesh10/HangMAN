function ChosenLetters({ guessedLetters }) {
  return (
    <aside className="chosen-letters" aria-label="Used letters">
      <h3>Used letters</h3>
      <div className="letters-box">
        {guessedLetters.length
          ? guessedLetters.map((letter) => (
              <span key={letter} className="used-letter-chip">
                {letter}
              </span>
            ))
          : <span className="empty-used-letters">No letters used yet</span>}
      </div>
    </aside>
  )
}

export default ChosenLetters
