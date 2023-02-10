import type { FC } from "react";

type CardProps = {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

const defaultProps = {
  className: "",
  children: <span>Empty Heading Here!</span>,
};

const Card: FC<CardProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={`${className} p-xl w-1/3 min-w-[450px] bg-white drop-shadow rounded-lg `}
    >
      {children}
    </div>
  );
};

Card.defaultProps = defaultProps;

export default Card;
