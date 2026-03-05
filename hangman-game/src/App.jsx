import { useMemo, useState } from 'react'
import './App.css'
import WordDisplay from './components/WordDisplay'
import Keyboard from './components/Keyboard'
import ChosenLetters from './components/ChosenLetters'
import StartScreen from './components/StartScreen'
import EndScreen from './components/EndScreen'

const MAX_WRONG_GUESSES = 5
const WORDS = [
  'REACT',
  'COMPONENT',
  'JAVASCRIPT',
  'FUNCTION',
  'STATE',
  'PROPS',
  'DOCKER',
  'VITE',
]

function getRandomWord(previousWord) {
  if (WORDS.length === 1) return WORDS[0]

  let word = WORDS[Math.floor(Math.random() * WORDS.length)]
  while (word === previousWord) {
    word = WORDS[Math.floor(Math.random() * WORDS.length)]
  }

  return word
}

function App() {
  const [screen, setScreen] = useState('start')
  const [targetWord, setTargetWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [gameStatus, setGameStatus] = useState('playing')

  const hangmanImage = useMemo(
    () => `/hangman/hangman-${wrongGuesses}.svg`,
    [wrongGuesses],
  )

  const handleGuess = (letter) => {
    if (screen !== 'game' || gameStatus !== 'playing' || guessedLetters.includes(letter)) return

    const nextGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(nextGuessedLetters)

    if (!targetWord.includes(letter)) {
      const nextWrongGuesses = wrongGuesses + 1
      setWrongGuesses(nextWrongGuesses)

      if (nextWrongGuesses >= MAX_WRONG_GUESSES) {
        setGameStatus('lost')
        setScreen('result')
      }
      return
    }

    const hasWon = targetWord
      .split('')
      .every((wordLetter) => nextGuessedLetters.includes(wordLetter))

    if (hasWon) {
      setGameStatus('won')
      setScreen('result')
    }
  }

  const startNewGame = (nextScreen = 'game') => {
    setTargetWord((previousWord) => getRandomWord(previousWord))
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameStatus('playing')
    setScreen(nextScreen)
  }

  if (screen === 'start') {
    return (
      <main className="game-container">
        <StartScreen onStart={() => startNewGame('game')} />
      </main>
    )
  }

  if (screen === 'result') {
    return (
      <main className="game-container">
        <EndScreen status={gameStatus} word={targetWord} onPlayAgain={() => startNewGame('game')} />
      </main>
    )
  }

  return (
    <main className="game-container">
      <h1>Hangman Game</h1>

      <div className="game-layout">
        <div>
          <div className="status-panel">
            <img
              src={hangmanImage}
              alt={`Hangman stage ${wrongGuesses}`}
              className="hangman-image"
            />
            <p>
              Lives remaining: <strong>{MAX_WRONG_GUESSES - wrongGuesses}</strong>
            </p>
          </div>

          <WordDisplay word={targetWord} guessedLetters={guessedLetters} />

          <Keyboard
            guessedLetters={guessedLetters}
            onGuess={handleGuess}
            disabled={gameStatus !== 'playing'}
          />
        </div>

        <ChosenLetters guessedLetters={guessedLetters} />
      </div>

      <button onClick={startNewGame} className="new-game-button">
        New Game
      </button>
    </main>
  )
}

export default App
