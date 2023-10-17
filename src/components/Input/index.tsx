import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputWrapper } from "./styles";
import { RegularText } from "../Typography";

// Type dinamico que permite passar por props qualquer atributo de um input, sendo type, placeholder, ...
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, className, ...props }, ref) => {
  return(
    <InputWrapper className={className}>
      <InputStyleContainer {...props} ref={ref} />
      {error && <RegularText size="s">{error}</RegularText>}
    </InputWrapper>
  )
})
