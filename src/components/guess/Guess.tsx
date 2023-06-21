import { range } from '@/helpers';

interface Props {
  value: string;
}

const Guess = ({ value }: Props) => {
  console.log(value);
  return (
    <p className='guess'>
      {range(0, 5).map((num) => (
        <span key={num} className='cell'>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
};

export default Guess;
