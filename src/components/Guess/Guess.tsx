import { checkGuess } from '@/game-helper';
import { range } from '@/helpers';
import Cell from '@components/Guess/Cell';

interface Props {
  value: string;
  answer: string;
}

const Guess = ({ value, answer }: Props) => {
  const result = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(0, 5).map((num) => (
        <Cell key={num} letter={result ? result[num].letter : undefined} status={result ? result[num].status : undefined} />
      ))}
    </p>
  );
};

export default Guess;
