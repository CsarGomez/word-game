import { useState } from 'react';

const GuessInput = () => {
  const [guess, setGuess] = useState('');

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id='guess-input'
        type='text'
      />
    </form>
  );
};

export default GuessInput;
