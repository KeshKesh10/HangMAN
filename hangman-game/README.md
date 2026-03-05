## Features

- 6 Hangman image states for a 5-life game (`hangman-0.svg` through `hangman-5.svg`)
- Start screen before gameplay
- Letter selection keyboard (A-Z)
- Separate used-letters box on the gameplay screen
- Word rendering using reusable `LetterBox` components
- New Game button
- Winner and loser result screen after the game

## Component Structure

- `src/App.jsx` - Main game state and rules
- `src/components/LetterBox.jsx` - Class-based `LetterBox` component
- `src/components/letterbox.js` - Compatibility re-export for imports
- `src/components/WordDisplay.jsx` - Word renderer using `LetterBox`
- `src/components/Keyboard.jsx` - Letter selection grid
- `src/components/ChosenLetters.jsx` - Separate used-letters box
- `src/components/StartScreen.jsx` - Start screen UI
- `src/components/EndScreen.jsx` - Winner/Loser end screen UI

## Run Locally

1. Install dependencies:
	```bash
	npm install
	```
2. Start dev server:
	```bash
	npm run dev
	```
3. Open the URL shown by Vite (usually `http://localhost:5173`).

## Run with Docker

Build the image:

```bash
docker build -t hangman-game .
```

Run the container:

```bash
docker run --rm -p 8080:80 hangman-game
```

Open `http://localhost:8080`.

## Game Rules

- The game selects a random word.
- You have 5 lives.
- Every incorrect guess advances the Hangman image.
- Win by revealing all letters before lives reach 0.
- Lose when the final Hangman state is reached