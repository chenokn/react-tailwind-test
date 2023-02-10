import type { FC } from "react";

type HorizontalScrollProps = {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

const HorizontalScrollCards: FC<HorizontalScrollProps> = (props) => {
  const { children, className } = props;

  return <div className={`${className} flex gap-lg`}>{children}</div>;
};

export default HorizontalScrollCards;
