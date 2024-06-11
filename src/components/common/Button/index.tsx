import { PropsWithChildren } from "react";
import S from "./styled";

const Button = ({ children }: PropsWithChildren) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
