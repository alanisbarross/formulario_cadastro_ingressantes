import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.css";

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "yellow" | "green";
  children: ReactNode;
}

export const Button: React.FunctionComponent<PropsButton> = ({
  color = "green",
  children,
  ...props
}) => {
  return (
    <button className={`${color}-shapes`} {...props}>
      {children}
    </button>
  );
};
