import Banner from '@components/Banner/Banner';

interface Props {
  answer: string;
  onReset: () => void;
}

const LostBanner = ({ answer, onReset }: Props) => {
  return (
    <Banner status='sad'>
      <>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
        <button onClick={() => onReset()}>Play Again</button>
      </>
    </Banner>
  );
};

export default LostBanner;
