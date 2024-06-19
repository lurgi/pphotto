import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import S from "./styled";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: PropsWithChildren<IButton>) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
