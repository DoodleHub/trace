import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  appearance: string;
}

export const Button = ({ children, appearance }: ButtonProps) => {
  return <StyledButton $appearance={appearance}>{children}</StyledButton>;
};
