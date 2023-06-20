import { Guess } from '@/models/models';

interface Props {
  guesses: Guess[];
}
const GuessResults = ({ guesses }: Props) => {
  return (
    <>
      <div className='guess-results'>
        {guesses.map(({ value, id }) => (
          <p key={id}>{value}</p>
        ))}
      </div>
    </>
  );
};

export default GuessResults;
