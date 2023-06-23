import { useState } from 'react';
import GuessInput from '@components/GuessInput/GuessInput';
import GuessResults from '@components/GuessResults/GuessResults';
import WonBanner from '@components/WonLostBanner/WonBanner';
import LostBanner from '@components/WonLostBanner/LostBanner';
import { NUMBER_OF_GUESSES_ALLOWED } from '@/constants';
import { sample } from '@/helpers';
import { WORDS } from '@/data';

const answer = sample(WORDS);
console.log({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'won' | 'lost' | 'playing'>('playing');

  const handleSubmitGuess = (tentativeGuess: string) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUMBER_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };
  return (
    <main>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </main>
  );
};

export default Game;
