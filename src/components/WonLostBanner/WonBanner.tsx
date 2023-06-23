import Banner from '@components/Banner/Banner';

interface Props {
  numOfGuesses: number;
}

const WonBanner = ({ numOfGuesses }: Props) => {
  console.log({ numOfGuesses });
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> `Got it in {<strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>}`
      </p>
    </Banner>
  );
};

export default WonBanner;
