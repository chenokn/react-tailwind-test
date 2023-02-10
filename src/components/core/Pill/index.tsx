import type { FC } from "react";
import type BaseTheme from "@/utils/BaseTheme";

type PillTypes = typeof BaseTheme.pillTypes[number];

type PillProps = {
  pillType?: PillTypes;
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

const defaultProps = {};

const Pill: FC<PillProps> = (props) => {
  const { pillType, children, className } = props;
  let pillTypeStyle;
  switch (pillType) {
    case "on":
      pillTypeStyle = "bg-cs-green-bg text-cs-green";

      break;
    case "off":
      pillTypeStyle = "bg-cs-orange-bg text-cs-orange";

      break;
    case "normal":
    default:
      pillTypeStyle = "bg-cs-gray-bg";
  }

  return (
    <span
      className={`${pillTypeStyle} ${
        className || "p-xs items-center font-medium text-sm uppercase rounded"
      }`}
    >
      {children || `${pillType} track`}
    </span>
  );
};
Pill.defaultProps = defaultProps;

export default Pill;
