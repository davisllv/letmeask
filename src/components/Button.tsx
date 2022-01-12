import { ButtonHTMLAttributes } from "react";

import { ButtonStyled } from "../styles/button";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonStyled>
      <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
    </ButtonStyled>
  );
}
