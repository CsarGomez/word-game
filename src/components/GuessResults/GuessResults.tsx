import Guess from '@components/guess/Guess';
import { NUMBER_OF_GUESSES_ALLOWED } from '@/constants';
import { range } from '@/helpers';

interface Props {
  guesses: string[];
}
const GuessResults = ({ guesses }: Props) => {
  return (
    <>
      <div className='guess-results'>
        {range(0, NUMBER_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} value={guesses[num]} />
        ))}
      </div>
    </>
  );
};

export default GuessResults;
