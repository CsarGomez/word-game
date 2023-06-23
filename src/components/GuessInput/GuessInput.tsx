import { useState } from 'react';

interface Props {
  handleSubmitGuess: (guess: string) => void;
  gameStatus: string;
}

const GuessInput = ({ handleSubmitGuess, gameStatus }: Props) => {
  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        required
        disabled={gameStatus !== 'playing'}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id='guess-input'
        type='text'
      />
    </form>
  );
};

export default GuessInput;
