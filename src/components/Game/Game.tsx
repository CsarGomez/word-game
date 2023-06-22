import { useState } from 'react';
import GuessInput from '@components/GuessInput/GuessInput';
import GuessResults from '@components/GuessResults/GuessResults';

const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleSubmitGuess = (tentativeGuess: string) => {
    setGuesses([...guesses, tentativeGuess]);
  };
  return (
    <main>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </main>
  );
};

export default Game;
