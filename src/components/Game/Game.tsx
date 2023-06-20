import { useState } from 'react';
import GuessInput from '@components/GuessInput/GuessInput';
import GuessResults from '@components/GuessResults/GuessResults';
import { Guess } from '@models/models';
const Game = () => {
  const [guesses, setGuesses] = useState<Guess[]>([]);

  const handleSubmitGuess = (tentativeGuess: string) => {
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };
    setGuesses([...guesses, nextGuess]);
  };
  return (
    <main>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </main>
  );
};

export default Game;
