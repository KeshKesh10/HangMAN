THE HANGMAN GAME 

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
