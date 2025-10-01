type CardProps = {
  time: string;
  onClick: () => void;
};

const Card = ({ time, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <p>{time}</p>
    </div>
  );
};

export default Card;
