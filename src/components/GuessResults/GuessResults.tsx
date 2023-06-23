import Guess from '@components/Guess/Guess';
import { NUMBER_OF_GUESSES_ALLOWED } from '@/constants';
import { range } from '@/helpers';

interface Props {
  guesses: string[];
  answer: string;
}
const GuessResults = ({ guesses, answer }: Props) => {
  return (
    <>
      <div className='guess-results'>
        {range(0, NUMBER_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} value={guesses[num]} answer={answer} />
        ))}
      </div>
    </>
  );
};

export default GuessResults;
