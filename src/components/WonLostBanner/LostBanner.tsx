import Banner from '@components/Banner/Banner';

interface Props {
  answer: string;
}

const LostBanner = ({ answer }: Props) => {
  return (
    <Banner status='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </Banner>
  );
};

export default LostBanner;
