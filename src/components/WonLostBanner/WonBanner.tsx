import Banner from '@components/Banner/Banner';

interface Props {
  numOfGuesses: number;
  onReset: () => void;
}

const WonBanner = ({ numOfGuesses, onReset }: Props) => {
  console.log({ numOfGuesses });
  return (
    <Banner status='happy'>
      <>
        <p>
          <strong>Congratulations!</strong> `Got it in {<strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>}`
        </p>
        <button onClick={() => onReset()}>Play Again</button>
      </>
    </Banner>
  );
};

export default WonBanner;
