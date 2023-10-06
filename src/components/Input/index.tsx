import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

// Type dinamico que permite passar por props qualquer atributo de um input, sendo type, placeholder, ...
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps){
  return (
    <InputStyleContainer {...props}/>
  );
};

