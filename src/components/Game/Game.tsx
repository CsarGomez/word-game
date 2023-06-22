import { useState } from 'react';
import GuessInput from '@components/GuessInput/GuessInput';
import GuessResults from '@components/GuessResults/GuessResults';
import { sample } from '@/helpers';
import { WORDS } from '@/data';

const answer = sample(WORDS);
console.log({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleSubmitGuess = (tentativeGuess: string) => {
    setGuesses([...guesses, tentativeGuess]);
  };
  return (
    <main>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </main>
  );
};

export default Game;
