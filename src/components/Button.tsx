import React, { ReactNode } from "react";
interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger"; //? let to set prop optional, we constrait possibilities of
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  //color has value by default
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
