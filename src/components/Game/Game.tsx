import { useState } from 'react';
import GuessInput from '@components/GuessInput/GuessInput';
import GuessResults from '@components/GuessResults/GuessResults';
import WonBanner from '@components/WonLostBanner/WonBanner';
import LostBanner from '@components/WonLostBanner/LostBanner';
import { NUMBER_OF_GUESSES_ALLOWED } from '@/constants';
import { sample } from '@/helpers';
import { WORDS } from '@/data';

const initialAnswer = sample(WORDS);

const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'won' | 'lost' | 'playing'>('playing');
  const [answer, setAnswer] = useState<string>(initialAnswer);

  const handleSubmitGuess = (tentativeGuess: string) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUMBER_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleResetGame = () => {
    setGuesses([]);
    setGameStatus('playing');
    setAnswer(sample(WORDS));
  };

  return (
    <main>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} onReset={handleResetGame} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} onReset={handleResetGame} />}
    </main>
  );
};

export default Game;
