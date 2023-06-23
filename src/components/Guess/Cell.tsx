interface Props {
  letter: string | undefined;
  status: string | undefined;
}

const Cell = ({ letter, status }: Props) => {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
};

export default Cell;
