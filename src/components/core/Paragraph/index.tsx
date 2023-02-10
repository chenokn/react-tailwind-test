import type { FC } from "react";

type ParagraphProps = {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

const defaultProps = {
  className: "",
  children: <span>Empty Paragraph Here!</span>,
};

const P: FC<ParagraphProps> = (props) => {
  const { children, className } = props;

  return <p className={`${className || "text-sm"}`}>{children}</p>;
};

P.defaultProps = defaultProps;

export default P;
