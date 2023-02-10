import type { FC } from "react";

type HeadingProps = {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

const defaultProps = {
  className: "",
  children: <span>Empty Heading Here!</span>,
};

const H1: FC<HeadingProps> = (props) => {
  const { children, className } = props;

  return <h1 className={`${className} text-xl font-bold`}>{children}</h1>;
};

H1.defaultProps = defaultProps;

export default H1;
