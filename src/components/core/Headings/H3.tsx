import type { FC } from "react";

type HeadingProps = {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

const defaultProps = {
  className: "",
  children: <span>Empty Heading Here!</span>,
};

const H3: FC<HeadingProps> = (props) => {
  const { children, className } = props;

  return <h3 className={className || `text-lg font-bold`}>{children}</h3>;
};

H3.defaultProps = defaultProps;

export default H3;
