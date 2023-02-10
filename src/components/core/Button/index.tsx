import type { MouseEventHandler, FC } from "react";

type ButtonProps = {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
  onClick?: MouseEventHandler;
};

const defaultProps = {
  className: "",
};

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, className } = props;

  return (
    <button
      {...props}
      className={`${className} p-sm h-8 w-8`}
      onClick={onClick}
    >
      {children}
      <img src="./assets/close.svg" alt="" className="w-full h-full" />
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
