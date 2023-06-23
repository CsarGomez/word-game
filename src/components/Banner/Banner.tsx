interface Props {
  status: string;
  children: React.ReactNode;
}

const Banner = ({ status, children }: Props) => {
  return (
    <div className={`${status} banner`}>
      <p>{children}</p>
    </div>
  );
};

export default Banner;
